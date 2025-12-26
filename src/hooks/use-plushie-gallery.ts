"use client";

import { useState, useEffect } from "react";
import type { Plushie } from "@/lib/mock-data/plushies";

const GALLERY_STORAGE_KEY = "plushify_gallery";

export function usePlushieGallery() {
  const [gallery, setGallery] = useState<Plushie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load gallery from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(GALLERY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        const withDates = parsed.map((item: Plushie) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
        setGallery(withDates);
      }
    } catch (error) {
      console.error("Failed to load gallery from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save gallery to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
      } catch (error) {
        console.error("Failed to save gallery to localStorage:", error);
      }
    }
  }, [gallery, isLoading]);

  const addPlushie = (plushie: Plushie) => {
    setGallery((prev) => [plushie, ...prev]);
  };

  const deletePlushie = (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setGallery((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return {
    gallery,
    isLoading,
    addPlushie,
    deletePlushie,
    toggleFavorite,
  };
}
