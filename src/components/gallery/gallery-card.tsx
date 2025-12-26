"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MoreVertical, Download, Share2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Plushie } from "@/lib/mock-data/plushies";

interface GalleryCardProps {
  plushie: Plushie;
  onClick: () => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onDownload: (plushie: Plushie) => void;
  onShare: (plushie: Plushie) => void;
}

export function GalleryCard({
  plushie,
  onClick,
  onDelete,
  onToggleFavorite,
  onDownload,
  onShare,
}: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload(plushie);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare(plushie);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this plushie?")) {
      onDelete(plushie.id);
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(plushie.id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border-2 border-gray-200 dark:border-gray-800"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={plushie.generatedImage}
          alt={`Generated plushie in ${plushie.style} style`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Favorite Badge */}
        {plushie.isFavorite && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-plushie-pink/90 hover:bg-plushie-pink text-white border-0">
              <Heart className="mr-1 h-3 w-3 fill-current" />
              Favorite
            </Badge>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-black/70 hover:bg-black/70 text-white border-0">
            {formatDate(plushie.createdAt)}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick Actions */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            onClick={handleToggleFavorite}
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full bg-white hover:bg-white/90 shadow-lg"
          >
            <Heart
              className={`h-5 w-5 ${
                plushie.isFavorite ? "fill-plushie-pink text-plushie-pink" : "text-gray-700"
              }`}
            />
          </Button>

          <Button
            onClick={handleDownload}
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full bg-white hover:bg-white/90 shadow-lg"
          >
            <Download className="h-5 w-5 text-gray-700" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button
                variant="secondary"
                size="icon"
                className="h-12 w-12 rounded-full bg-white hover:bg-white/90 shadow-lg"
              >
                <MoreVertical className="h-5 w-5 text-gray-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
              {plushie.style} Plushie
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {plushie.size}
            </p>
          </div>

          <Button
            onClick={handleToggleFavorite}
            variant="ghost"
            size="icon"
            className="h-10 w-10"
          >
            <Heart
              className={`h-5 w-5 ${
                plushie.isFavorite ? "fill-plushie-pink text-plushie-pink" : "text-gray-400"
              }`}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
