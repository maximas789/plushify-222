"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    if (!touch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(touch.clientX, rect);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-white dark:from-pink-950/20 dark:via-purple-950/20 dark:to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-pink-200/30 dark:bg-pink-500/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-200/30 dark:bg-purple-500/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 dark:bg-pink-900/30 px-4 py-2 text-sm font-medium text-pink-700 dark:text-pink-300">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Plushie Generator</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">
                Turn Your Photos
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">
                Into Adorable Plushies
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Upload any photo and watch AI transform it into a cute, custom plushie toy. Perfect for gifts, keepsakes, or just because!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/25"
              >
                <Link href="/dashboard">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950/20"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Examples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Free credits included</span>
              </div>
            </div>
          </div>

          {/* Right: Before/After Comparison */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full blur-2xl animate-bounce-gentle" />

              {/* Before/After Slider */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-pink-500/20 p-4 sm:p-6 lg:p-8">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onTouchStart={handleMouseDown}
                  onTouchEnd={handleMouseUp}
                  onTouchMove={handleTouchMove}
                >
                  {/* After image (full) */}
                  <div className="absolute inset-0">
                    <Image
                      src="/example/after.png"
                      alt="After - Plushie version"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      After ✨
                    </div>
                  </div>

                  {/* Before image (clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <Image
                      src="/example/before.jpg"
                      alt="Before - Original photo"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Before 📸
                    </div>
                  </div>

                  {/* Slider line and handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-400">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-pink-400 rounded-full" />
                        <div className="w-0.5 h-4 bg-pink-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helper text */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    ← Drag to compare →
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg animate-bounce-gentle">
                <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                  🎁 Perfect Gift!
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg animate-bounce-gentle" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  ⚡ AI-Powered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
