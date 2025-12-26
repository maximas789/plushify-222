"use client";

import { useEffect, useState } from "react";
import { Sparkles, Heart, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";

const STATUS_MESSAGES = [
  {
    icon: Sparkles,
    message: "Adding magical fluffiness...",
    progress: 20,
  },
  {
    icon: Heart,
    message: "Sewing with love and care...",
    progress: 40,
  },
  {
    icon: Star,
    message: "Polishing the cuteness...",
    progress: 60,
  },
  {
    icon: Zap,
    message: "Almost done! Final touches...",
    progress: 80,
  },
];

export function GenerationProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % STATUS_MESSAGES.length;
        setProgress(STATUS_MESSAGES[nextStep]?.progress || 0);
        return nextStep;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  const CurrentIcon = STATUS_MESSAGES[currentStep]?.icon || Sparkles;

  return (
    <Card className="w-full border-2 border-plushie-pink/30 bg-gradient-to-br from-plushie-pink/5 to-plushie-purple/5 dark:from-plushie-pink/10 dark:to-plushie-purple/10">
      <CardContent className="p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated Spinner */}
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-plushie-pink/20" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-lg">
              <Spinner className="h-12 w-12 text-plushie-pink" />
            </div>
          </div>

          {/* Status Message */}
          <div className="flex items-center gap-3 text-center">
            <CurrentIcon className="h-6 w-6 text-plushie-pink animate-bounce-gentle" />
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {STATUS_MESSAGES[currentStep]?.message || "Creating your plushie..."}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Generating your plushie</span>
              <span className="font-semibold text-plushie-pink">{progress}%</span>
            </div>
            <Progress
              value={progress}
              className="h-3 bg-gray-200 dark:bg-gray-800"
            />
          </div>

          {/* Fun Facts */}
          <div className="rounded-lg border border-gray-200 bg-white/50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              ✨ Fun fact: Our AI has generated over 1 million adorable plushies!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
