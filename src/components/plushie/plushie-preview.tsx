"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Save,
  RefreshCw,
  ZoomIn,
  Heart,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import type { PlushieStyle, PlushieSize } from "./generation-panel";

export interface PlushieResult {
  originalImage: string;
  generatedImage: string;
  style: PlushieStyle;
  size: PlushieSize;
  createdAt: Date;
}

interface PlushiePreviewProps {
  result: PlushieResult;
  onSaveToGallery: () => void;
  onGenerateAnother: () => void;
}

export function PlushiePreview({
  result,
  onSaveToGallery,
  onGenerateAnother,
}: PlushiePreviewProps) {
  const [sliderValue, setSliderValue] = useState([50]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result.generatedImage;
    link.download = `plushie-${Date.now()}.png`;
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
          url: result.generatedImage,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(result.generatedImage);
      toast.success("Image URL copied to clipboard!");
    }
  };

  return (
    <Card className="w-full border-2 border-plushie-pink/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-plushie-pink fill-plushie-pink" />
          Your Adorable Plushie!
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Before/After Comparison */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800">
          {/* Original Image (Before) */}
          <div className="absolute inset-0">
            <Image
              src={result.originalImage}
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
              src={result.generatedImage}
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

          {/* Zoom Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="relative aspect-square w-full">
                <Image
                  src={result.generatedImage}
                  alt="Generated plushie full size"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </DialogContent>
          </Dialog>

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

        {/* Plushie Details */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Style</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {result.style}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Size</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {result.size}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
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
            onClick={onSaveToGallery}
            className="h-12 bg-plushie-pink hover:bg-plushie-pink/90 col-span-2 md:col-span-1"
          >
            <Save className="mr-2 h-4 w-4" />
            Save to Gallery
          </Button>

          <Button
            onClick={onGenerateAnother}
            variant="default"
            className="h-12 bg-gradient-to-r from-plushie-blue to-plushie-purple hover:from-plushie-blue/90 hover:to-plushie-purple/90 col-span-2 md:col-span-1"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate Another
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
