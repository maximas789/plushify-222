"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useImageUpload } from "@/hooks/use-image-upload";

interface ImageUploadZoneProps {
  onImageChange?: (image: string | null) => void;
}

export function ImageUploadZone({ onImageChange }: ImageUploadZoneProps) {
  const {
    uploadedImage,
    error,
    isDragging,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    clearImage,
  } = useImageUpload();

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Notify parent when image changes
  useEffect(() => {
    onImageChange?.(uploadedImage);
  }, [uploadedImage, onImageChange]);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
  };

  return (
    <div className="w-full">
      {!uploadedImage ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative flex flex-col items-center justify-center
            min-h-[400px] w-full rounded-2xl border-2 border-dashed
            transition-all duration-300 ease-in-out
            ${
              isDragging
                ? "border-plushie-pink bg-plushie-pink/5 scale-[1.02]"
                : "border-gray-300 dark:border-gray-700 hover:border-plushie-pink hover:bg-plushie-pink/5"
            }
          `}
        >
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div
              className={`
                flex h-20 w-20 items-center justify-center rounded-full
                transition-all duration-300
                ${
                  isDragging
                    ? "bg-plushie-pink text-white scale-110"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                }
              `}
            >
              <Upload className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Upload Your Photo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drag and drop your image here, or click to browse
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                JPG, PNG, or WebP • Max 10MB
              </p>
            </div>

            <Button
              onClick={handleBrowseClick}
              variant="default"
              className="bg-plushie-pink hover:bg-plushie-pink/90 text-white"
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Choose Image
            </Button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileInputChange}
            className="hidden"
            aria-label="Upload image file"
          />
        </div>
      ) : (
        <div className="relative min-h-[400px] w-full rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4">
          <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-xl bg-white dark:bg-gray-900">
            <Image
              src={uploadedImage}
              alt="Uploaded preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />

            <Button
              onClick={clearImage}
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 h-10 w-10 rounded-full shadow-lg"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Image uploaded successfully! Ready to generate your plushie.
            </p>
            <Button
              onClick={clearImage}
              variant="outline"
              size="sm"
            >
              Change Image
            </Button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}
    </div>
  );
}
