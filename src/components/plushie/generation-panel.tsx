"use client";

import { useState } from "react";
import { Sparkles, Palette, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type PlushieStyle = "kawaii" | "cartoon" | "realistic" | "vintage";
export type PlushieSize = "small" | "medium" | "large";

interface GenerationPanelProps {
  uploadedImage: string | null;
  onGenerate: (style: PlushieStyle, size: PlushieSize) => void;
  isGenerating: boolean;
}

const STYLE_OPTIONS: { value: PlushieStyle; label: string; description: string }[] = [
  {
    value: "kawaii",
    label: "Kawaii",
    description: "Cute and adorable with big eyes and soft features",
  },
  {
    value: "cartoon",
    label: "Cartoon",
    description: "Playful cartoon style with vibrant colors",
  },
  {
    value: "realistic",
    label: "Realistic",
    description: "Detailed and lifelike plushie appearance",
  },
  {
    value: "vintage",
    label: "Vintage",
    description: "Classic retro look with warm, nostalgic tones",
  },
];

const SIZE_OPTIONS: { value: PlushieSize; label: string; description: string }[] = [
  {
    value: "small",
    label: "Small",
    description: "Compact 8 inch plushie",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Perfect 12 inch plushie",
  },
  {
    value: "large",
    label: "Large",
    description: "Impressive 16 inch plushie",
  },
];

export function GenerationPanel({
  uploadedImage,
  onGenerate,
  isGenerating,
}: GenerationPanelProps) {
  const [selectedStyle, setSelectedStyle] = useState<PlushieStyle>("kawaii");
  const [selectedSize, setSelectedSize] = useState<PlushieSize>("medium");

  const handleGenerate = () => {
    onGenerate(selectedStyle, selectedSize);
  };

  return (
    <Card className="w-full border-2 border-gray-200 dark:border-gray-800 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-plushie-pink" />
          Customize Your Plushie
        </CardTitle>
        <CardDescription>
          Choose your preferred style and size for the perfect plushie
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Style Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-plushie-pink" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Choose Style
            </h3>
          </div>

          <Tabs
            value={selectedStyle}
            onValueChange={(value) => setSelectedStyle(value as PlushieStyle)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {STYLE_OPTIONS.map((option) => (
                <TabsTrigger
                  key={option.value}
                  value={option.value}
                  className="data-[state=active]:bg-plushie-pink data-[state=active]:text-white"
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {STYLE_OPTIONS.map((option) => (
              <TabsContent key={option.value} value={option.value} className="mt-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {option.description}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Size Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-plushie-blue" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Choose Size
            </h3>
          </div>

          <Tabs
            value={selectedSize}
            onValueChange={(value) => setSelectedSize(value as PlushieSize)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              {SIZE_OPTIONS.map((option) => (
                <TabsTrigger
                  key={option.value}
                  value={option.value}
                  className="data-[state=active]:bg-plushie-blue data-[state=active]:text-white"
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {SIZE_OPTIONS.map((option) => (
              <TabsContent key={option.value} value={option.value} className="mt-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {option.description}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={!uploadedImage || isGenerating}
          className="w-full h-14 text-lg bg-gradient-to-r from-plushie-pink to-plushie-purple hover:from-plushie-pink/90 hover:to-plushie-purple/90 disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {isGenerating ? "Generating..." : "Generate Plushie"}
        </Button>

        {!uploadedImage && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Upload an image above to start generating
          </p>
        )}
      </CardContent>
    </Card>
  );
}
