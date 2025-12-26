import { Sparkles, Zap, Shield, Heart, Palette, Wand2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Generation",
    description: "Our advanced AI transforms any photo into a cute plushie design in seconds",
    image: "/plushies/samples/after-1.svg",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description: "Choose from Kawaii, Cartoon, Realistic, or Vintage styles to match your preference",
    image: "/plushies/samples/after-2.svg",
  },
  {
    icon: Sparkles,
    title: "High Quality Output",
    description: "Get detailed, print-ready designs perfect for custom plushie manufacturing",
    image: "/plushies/samples/after-3.svg",
  },
  {
    icon: Heart,
    title: "Perfect for Gifts",
    description: "Create unique, personalized gifts for birthdays, weddings, and special occasions",
    image: "/plushies/samples/after-5.svg",
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Choose <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Plushify</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the magic of AI-powered plushie creation with features designed for everyone
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-300 dark:hover:border-pink-700"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4">
                        <svg
                          viewBox="0 0 400 400"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <image href={feature.image} width="400" height="400" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional features grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-purple-100 dark:border-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Fast & Easy</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Upload your photo, choose your style, and get your plushie design in under 30 seconds. No design skills required!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-300 dark:hover:border-pink-700 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 flex-shrink-0">
                  <Shield className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Secure & Private</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Your photos are processed securely and never shared. Your designs are yours to keep forever.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
