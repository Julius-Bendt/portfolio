#!/bin/bash
set -e

apt-get update -y
apt-get install -y texlive-latex-extra texlive-fonts-extra texlive-xetex latexmk

cd cv
latexmk -xelatex -interaction=nonstopmode cv-redacted.tex
cd ..

mkdir -p public/assets/documents
cp cv/cv-redacted.pdf public/assets/documents/cv.pdf

npm run build
