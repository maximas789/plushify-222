"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { gallerySamples } from "@/lib/mock-data/gallery-samples";

export function DemoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallerySamples.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + gallerySamples.length) % gallerySamples.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallerySamples.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSample = gallerySamples[currentIndex]!;

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            See <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Magic</span> in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch how ordinary photos transform into adorable plushies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-pink-200 dark:border-pink-900/50 shadow-2xl shadow-pink-500/20 overflow-hidden">
            <CardContent className="p-0">
              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2">
                {/* Before Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
                  <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Before
                  </div>
                  <div className="w-full h-full max-w-md">
                    <svg
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <image href={currentSample.originalImage} width="400" height="400" />
                    </svg>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 flex items-center justify-center p-8">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    After ✨
                  </div>
                  <div className="w-full h-full max-w-md">
                    <svg
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <image href={currentSample.generatedImage} width="400" height="400" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Sample Info */}
              <div className="bg-white dark:bg-gray-800 p-6 border-t border-pink-200 dark:border-pink-900/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {currentSample.subject}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      Style: {currentSample.style}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToPrevious}
                      className="rounded-full border-2 border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/20"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToNext}
                      className="rounded-full border-2 border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/20"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {gallerySamples.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-gradient-to-r from-pink-500 to-purple-500"
                          : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Auto-playing • Slide {currentIndex + 1} of {gallerySamples.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
