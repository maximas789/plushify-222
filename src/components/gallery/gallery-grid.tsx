"use client";

import { useState, useMemo } from "react";
import { ArrowUpDown, Sparkles } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Plushie } from "@/lib/mock-data/plushies";
import { GalleryCard } from "./gallery-card";

type FilterType = "all" | "favorites" | "kawaii" | "cartoon" | "realistic" | "vintage";
type SortType = "newest" | "oldest";

interface GalleryGridProps {
  plushies: Plushie[];
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onCardClick: (plushie: Plushie) => void;
}

export function GalleryGrid({
  plushies,
  onDelete,
  onToggleFavorite,
  onCardClick,
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortOrder, setSortOrder] = useState<SortType>("newest");

  const filteredAndSortedPlushies = useMemo(() => {
    let filtered = plushies;

    // Apply filter
    if (activeFilter === "favorites") {
      filtered = filtered.filter((p) => p.isFavorite);
    } else if (activeFilter !== "all") {
      filtered = filtered.filter((p) => p.style === activeFilter);
    }

    // Apply sort
    return filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [plushies, activeFilter, sortOrder]);

  const handleDownload = (plushie: Plushie) => {
    const link = document.createElement("a");
    link.href = plushie.generatedImage;
    link.download = `plushie-${plushie.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (plushie: Plushie) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Plushify Creation",
          text: "Check out this adorable plushie I made!",
          url: plushie.generatedImage,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      navigator.clipboard.writeText(plushie.generatedImage);
      alert("Image URL copied to clipboard!");
    }
  };

  const getFilterLabel = (filter: FilterType): string => {
    switch (filter) {
      case "all":
        return "All";
      case "favorites":
        return "Favorites";
      default:
        return filter.charAt(0).toUpperCase() + filter.slice(1);
    }
  };

  const getFilterCount = (filter: FilterType): number => {
    if (filter === "all") return plushies.length;
    if (filter === "favorites") return plushies.filter((p) => p.isFavorite).length;
    return plushies.filter((p) => p.style === filter).length;
  };

  return (
    <div className="space-y-6">
      {/* Filters and Sort Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs
          value={activeFilter}
          onValueChange={(value) => setActiveFilter(value as FilterType)}
          className="w-full md:w-auto"
        >
          <TabsList className="h-10 bg-gray-100 dark:bg-gray-800">
            {(["all", "favorites", "kawaii", "cartoon", "realistic", "vintage"] as FilterType[]).map(
              (filter) => (
                <TabsTrigger
                  key={filter}
                  value={filter}
                  className="data-[state=active]:bg-plushie-pink data-[state=active]:text-white"
                >
                  {getFilterLabel(filter)}
                  <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-xs">
                    {getFilterCount(filter)}
                  </span>
                </TabsTrigger>
              )
            )}
          </TabsList>
        </Tabs>

        <Button
          onClick={() =>
            setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))
          }
          variant="outline"
          className="h-10 gap-2 border-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          {sortOrder === "newest" ? "Newest First" : "Oldest First"}
        </Button>
      </div>

      {/* Gallery Grid */}
      {filteredAndSortedPlushies.length === 0 ? (
        <EmptyState
          icon={<Sparkles className="h-12 w-12 text-plushie-pink" />}
          title={
            activeFilter === "favorites"
              ? "No Favorites Yet"
              : activeFilter === "all"
              ? "Your Gallery is Empty"
              : `No ${activeFilter} Plushies Yet`
          }
          description={
            activeFilter === "favorites"
              ? "Mark your favorite plushies to see them here!"
              : "Generate your first plushie to start building your collection!"
          }
          ctaText="Generate Plushie"
          ctaHref="/dashboard"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedPlushies.map((plushie) => (
            <GalleryCard
              key={plushie.id}
              plushie={plushie}
              onClick={() => onCardClick(plushie)}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
              onDownload={handleDownload}
              onShare={handleShare}
            />
          ))}
        </div>
      )}

      {/* Stats */}
      {filteredAndSortedPlushies.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredAndSortedPlushies.length} of {plushies.length} plushies
          </p>
        </div>
      )}
    </div>
  );
}
