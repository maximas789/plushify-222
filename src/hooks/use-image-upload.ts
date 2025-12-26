"use client";

import { useState, useCallback, useEffect } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: "Invalid file type. Please upload a JPG, PNG, or WebP image.",
      };
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: "File size exceeds 10MB limit. Please upload a smaller image.",
      };
    }

    return { valid: true };
  };

  const handleFileSelect = useCallback(
    (file: File | null) => {
      setError(null);

      if (!file) {
        setUploadedImage(null);
        return;
      }

      const validation = validateFile(file);

      if (!validation.valid) {
        setError(validation.error || "Invalid file");
        setUploadedImage(null);
        return;
      }

      // Create object URL for preview
      const objectUrl = URL.createObjectURL(file);
      setUploadedImage(objectUrl);
    },
    []
  );

  const handleDrop = useCallback(
  (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0] || null);
    }
  },
  [handleFileSelect]
);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const clearImage = useCallback(() => {
    setUploadedImage(null);
    setError(null);
  }, []);

  // Cleanup object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

  return {
    uploadedImage,
    error,
    isDragging,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    clearImage,
  };
}
