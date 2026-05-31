/**
 * Validates that an image has proper alt text
 * @param alt - The alt text to validate
 * @param imageName - The name of the image for error context
 * @returns The validated alt text
 */
export function validateAltText(alt: string, imageName: string): string {
  if (!alt || alt.trim().length === 0) {
    if (import.meta.env.DEV) {
      console.warn(`Missing alt text for image: ${imageName}`);
    }
    return `Image: ${imageName}`;
  }

  if (alt.length < 3) {
    if (import.meta.env.DEV) {
      console.warn(
        `Alt text too short for image: ${imageName}. Alt text: "${alt}"`
      );
    }
  }

  return alt;
}

/**
 * Gets optimized image dimensions based on viewport size
 * @param originalWidth - Original image width
 * @param originalHeight - Original image height
 * @param maxWidth - Maximum width for the image
 * @returns Optimized dimensions
 */
export function getOptimizedDimensions(
  originalWidth: number,
  originalHeight: number,
  maxWidth: number = 800
): { width: number; height: number } {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight };
  }

  const aspectRatio = originalHeight / originalWidth;
  return {
    width: maxWidth,
    height: Math.round(maxWidth * aspectRatio),
  };
}

/**
 * Determines if an image should be eagerly loaded based on its position
 * @param index - The index of the image in a list
 * @param threshold - The number of images to eager load (default: 3)
 * @returns Whether to use eager loading
 */
export function shouldEagerLoad(index: number, threshold: number = 3): boolean {
  return index < threshold;
}
