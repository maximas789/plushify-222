"use client";

import { useState } from "react";
import { GalleryVertical, Heart } from "lucide-react";
import { BeforeAfterCard } from "@/components/gallery/before-after-card";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { LoadingSkeleton } from "@/components/shared/loading-skeleton";
import { PageHeader } from "@/components/shared/page-header";
import { usePlushieGallery } from "@/hooks/use-plushie-gallery";
import type { Plushie } from "@/lib/mock-data/plushies";

export default function GalleryPage() {
  const { gallery, isLoading, deletePlushie, toggleFavorite } = usePlushieGallery();
  const [selectedPlushie, setSelectedPlushie] = useState<Plushie | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (plushie: Plushie) => {
    setSelectedPlushie(plushie);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deletePlushie(id);
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
  };

  const favoritesCount = gallery.filter((p: Plushie) => p.isFavorite).length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <PageHeader
          title="My Gallery"
          description="View and manage all your adorable plushie creations"
        />

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900/50">
            <GalleryVertical className="h-5 w-5 text-plushie-blue" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {gallery.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total Plushies
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900/50">
            <Heart className="h-5 w-5 text-plushie-pink fill-plushie-pink" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {favoritesCount}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Favorites
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      ) : (
        <GalleryGrid
          plushies={gallery}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
          onCardClick={handleCardClick}
        />
      )}

      {/* Before/After Dialog */}
      <BeforeAfterCard
        plushie={selectedPlushie}
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSelectedPlushie(null);
        }}
        onDelete={handleDelete}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
