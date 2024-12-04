import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

interface ImageOptimizationOptions {
    width?: number;
    quality?: number;
    format?: 'webp' | 'avif';
}

export async function optimizeImage(
    inputPath: string,
    outputPath: string,
    options: ImageOptimizationOptions = {}
) {
    const {
        width = 800,
        quality = 80,
        format = 'webp'
    } = options;

    try {
        // Ensure output directory exists
        await fs.mkdir(path.dirname(outputPath), { recursive: true });

        // Process image with sharp
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Only resize if image is larger than target width
        if (metadata.width && metadata.width > width) {
            image.resize(width, undefined, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }

        // Convert to desired format
        if (format === 'webp') {
            image.webp({ quality });
        } else if (format === 'avif') {
            image.avif({ quality });
        }

        // Save optimized image
        await image.toFile(outputPath);

        return {
            success: true,
            originalSize: metadata.size,
            outputPath
        };
    } catch (error) {
        console.error(`Failed to optimize image: ${inputPath}`, error);
        return {
            success: false,
            error
        };
    }
}

export function getOptimizedImagePath(
    originalPath: string,
    options: ImageOptimizationOptions = {}
): string {
    const {
        width = 800,
        format = 'webp'
    } = options;

    const parsedPath = path.parse(originalPath);
    const optimizedName = `${parsedPath.name}-w${width}.${format}`;
    return path.join(parsedPath.dir, 'optimized', optimizedName);
}

export async function ensureOptimizedImage(
    imagePath: string,
    options: ImageOptimizationOptions = {}
): Promise<string> {
    const optimizedPath = getOptimizedImagePath(imagePath, options);

    try {
        // Check if optimized version exists
        await fs.access(optimizedPath);
        return optimizedPath;
    } catch {
        // Optimize if not exists
        const result = await optimizeImage(imagePath, optimizedPath, options);
        if (!result.success) {
            throw new Error(`Failed to optimize image: ${imagePath}`);
        }
        return optimizedPath;
    }
}