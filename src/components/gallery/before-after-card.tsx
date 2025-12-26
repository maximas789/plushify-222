"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Share2,
  Trash2,
  Heart,
  X,
  Calendar,
  Palette,
  Ruler,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import type { Plushie } from "@/lib/mock-data/plushies";

interface BeforeAfterCardProps {
  plushie: Plushie | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export function BeforeAfterCard({
  plushie,
  isOpen,
  onClose,
  onDelete,
  onToggleFavorite,
}: BeforeAfterCardProps) {
  const [sliderValue, setSliderValue] = useState([50]);

  if (!plushie) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = plushie.generatedImage;
    link.download = `plushie-${plushie.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
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
      toast.success("Image URL copied to clipboard!");
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this plushie?")) {
      onDelete(plushie.id);
      onClose();
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-plushie-pink" />
              Plushie Details
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Before/After Comparison */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800">
            {/* Original Image (Before) */}
            <div className="absolute inset-0">
              <Image
                src={plushie.originalImage}
                alt="Original image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-1 text-sm font-medium text-white">
                Before
              </div>
            </div>

            {/* Generated Image (After) - Clipped based on slider */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - (sliderValue[0] || 50)}% 0 0)` }}
            >
              <Image
                src={plushie.generatedImage}
                alt="Generated plushie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 rounded-lg bg-plushie-pink/90 px-3 py-1 text-sm font-medium text-white">
                After
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-white">Before</span>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs font-medium text-white">After</span>
              </div>
            </div>
          </div>

          {/* Plushie Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-plushie-blue" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Created</p>
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {formatDate(plushie.createdAt)}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-4 w-4 text-plushie-pink" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Style</p>
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {plushie.style}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="h-4 w-4 text-plushie-purple" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Size</p>
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {plushie.size}
              </p>
            </div>
          </div>

          {/* Favorite Badge */}
          {plushie.isFavorite && (
            <div className="flex justify-center">
              <Badge className="bg-plushie-pink/90 hover:bg-plushie-pink text-white border-0 px-4 py-2">
                <Heart className="mr-2 h-4 w-4 fill-current" />
                This plushie is in your favorites!
              </Badge>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              onClick={handleDownload}
              variant="outline"
              className="h-12 border-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="h-12 border-2"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>

            <Button
              onClick={() => onToggleFavorite(plushie.id)}
              variant="outline"
              className="h-12 border-2"
            >
              <Heart
                className={`mr-2 h-4 w-4 ${
                  plushie.isFavorite ? "fill-plushie-pink text-plushie-pink" : ""
                }`}
              />
              {plushie.isFavorite ? "Unfavorite" : "Favorite"}
            </Button>

            <Button
              onClick={handleDelete}
              variant="outline"
              className="h-12 border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
