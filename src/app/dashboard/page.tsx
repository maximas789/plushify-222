"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Image as ImageIcon, GalleryVertical } from "lucide-react";
import { toast } from "sonner";
import { GenerationPanel, type PlushieStyle, type PlushieSize } from "@/components/plushie/generation-panel";
import { GenerationProgress } from "@/components/plushie/generation-progress";
import { ImageUploadZone } from "@/components/plushie/image-upload-zone";
import { PlushiePreview, type PlushieResult } from "@/components/plushie/plushie-preview";
import { Button } from "@/components/ui/button";
import { usePlushieGallery } from "@/hooks/use-plushie-gallery";
import { mockUser } from "@/lib/mock-data/user";
import { mockGeneratePlushie } from "@/lib/mock-generation";

type GenerationState = "upload" | "generating" | "complete";

export default function DashboardPage() {
  const { addPlushie } = usePlushieGallery();
  const [generationState, setGenerationState] = useState<GenerationState>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedResult, setGeneratedResult] = useState<PlushieResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageChange = (image: string | null) => {
    setUploadedImage(image);
  };

  const handleGenerate = async (style: PlushieStyle, size: PlushieSize) => {
    if (!uploadedImage) return;

    setIsGenerating(true);
    setGenerationState("generating");

    try {
      const result = await mockGeneratePlushie(uploadedImage, style, size);

      setGeneratedResult({
        originalImage: uploadedImage,
        generatedImage: result.plushie.generatedImage,
        style,
        size,
        createdAt: new Date(),
      });

      setGenerationState("complete");
    } catch (error) {
      console.error("Generation failed:", error);
      setGenerationState("upload");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveToGallery = () => {
    if (!generatedResult) return;

    const plushie = {
      id: `plushie_${Date.now()}`,
      userId: mockUser.id,
      originalImage: generatedResult.originalImage,
      generatedImage: generatedResult.generatedImage,
      style: generatedResult.style,
      size: generatedResult.size,
      createdAt: generatedResult.createdAt,
      isFavorite: false,
    };

    try {
      addPlushie(plushie);
      toast.success("Plushie saved to gallery!");
    } catch (error) {
      console.error("Failed to save plushie:", error);
      toast.error("Failed to save plushie. Your browser storage might be full.");
    }
  };

  const handleGenerateAnother = () => {
    setUploadedImage(null);
    setGeneratedResult(null);
    setGenerationState("upload");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-plushie-pink to-plushie-purple bg-clip-text text-transparent">
            Plushie Generator
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Upload your photo and watch the magic happen!
          </p>
        </div>

        <Link href="/gallery">
          <Button variant="outline" className="h-12 gap-2 border-2">
            <GalleryVertical className="h-5 w-5" />
            View Gallery
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl space-y-8">
        {generationState === "upload" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-plushie-pink" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Step 1: Upload Image
                </h2>
              </div>
              <ImageUploadZone onImageChange={handleImageChange} />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-plushie-purple" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Step 2: Customize
                </h2>
              </div>
              <GenerationPanel
                uploadedImage={uploadedImage}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            </div>
          </div>
        )}

        {generationState === "generating" && (
          <div className="flex items-center justify-center">
            <GenerationProgress />
          </div>
        )}

        {generationState === "complete" && generatedResult && (
          <div className="flex items-center justify-center">
            <PlushiePreview
              result={generatedResult}
              onSaveToGallery={handleSaveToGallery}
              onGenerateAnother={handleGenerateAnother}
            />
          </div>
        )}
      </div>
    </div>
  );
}
