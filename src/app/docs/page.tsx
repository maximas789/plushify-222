import Link from "next/link";
import { Upload, Palette, Sparkles, FolderOpen, Download, Share2, ArrowRight, Lightbulb, Shield, Heart } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of using Plushify",
    icon: Sparkles,
    steps: [
      {
        title: "Create Your Account",
        description: "Sign up for a free account to get started. You'll receive 5 free credits to try out the service and create your first plushie.",
      },
      {
        title: "Choose Your Plan",
        description: "Select a credit package that fits your needs. Basic (30 credits), Pro (100 credits), or Elite (200 credits). Credits never expire!",
      },
      {
        title: "Navigate the Dashboard",
        description: "The dashboard is your creative hub. From here, you can upload images, generate plushies, and access your gallery.",
      },
    ],
  },
  {
    id: "uploading-images",
    title: "Uploading Images",
    description: "How to prepare and upload your photos",
    icon: Upload,
    steps: [
      {
        title: "Supported Formats",
        description: "We accept JPG, PNG, and WEBP image formats. Ensure your images are high quality for the best results.",
      },
      {
        title: "File Size Limits",
        description: "Maximum file size is 10MB. For optimal performance, aim for images between 1-5MB.",
      },
      {
        title: "Best Practices",
        description: "Use clear, well-lit photos with good contrast. Avoid blurry or heavily filtered images. The subject should be clearly visible.",
      },
      {
        title: "Upload Methods",
        description: "You can drag and drop your image directly into the upload zone, or click to browse your files. Both methods work equally well!",
      },
    ],
  },
  {
    id: "generation-options",
    title: "Generation Options",
    description: "Customize your plushie style and size",
    icon: Palette,
    steps: [
      {
        title: "Choose Your Style",
        description: "Select from four unique styles: Kawaii (adorable and cute), Cartoon (fun and playful), Realistic (detailed and lifelike), or Vintage (classic and nostalgic).",
      },
      {
        title: "Select Size",
        description: "Choose from Small, Medium, or Large sizes. Larger sizes produce more detailed outputs but may take slightly longer to generate.",
      },
      {
        title: "Generation Process",
        description: "Click 'Generate Plushie' and watch the magic happen! The process takes 3-5 seconds with cute status animations along the way.",
      },
      {
        title: "Preview Results",
        description: "After generation, you'll see a side-by-side comparison of your original image and the plushie version. Use the slider to explore the transformation!",
      },
    ],
  },
  {
    id: "gallery-management",
    title: "Gallery Management",
    description: "Organize and manage your creations",
    icon: FolderOpen,
    steps: [
      {
        title: "View Your Gallery",
        description: "Access your gallery from the dashboard or navigation menu. All your generated plushies are stored here automatically.",
      },
      {
        title: "Filter and Sort",
        description: "Filter by favorites or style, and sort by date (newest or oldest) to find specific plushies quickly.",
      },
      {
        title: "Download Plushies",
        description: "Download any plushie in high-resolution PNG format. Perfect for sharing, printing, or keeping as a digital keepsake.",
      },
      {
        title: "Share with Friends",
        description: "Use the share button to copy a link to your plushie. Share it with friends and family on social media or messaging apps.",
      },
      {
        title: "Favorite and Delete",
        description: "Mark your favorites for quick access, or delete plushies you no longer need. Your gallery is always under your control.",
      },
    ],
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: "Pro Tip: Experiment with Styles",
    description: "Try generating the same image in different styles to see which one you like best. Each style brings out different characteristics!",
  },
  {
    icon: Shield,
    title: "Pro Tip: Privacy First",
    description: "Your images are processed securely and stored only in your personal gallery. We never share your data with third parties.",
  },
  {
    icon: Heart,
    title: "Pro Tip: Create Collections",
    description: "Generate plushies of family members, friends, or pets to create adorable collections. They make perfect gifts!",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="User Guide"
          description="Everything you need to know to create adorable plushies from your photos"
        />

        {/* Introduction */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-900/30 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/10 dark:to-purple-950/10">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to Plushify! This guide will walk you through everything you need to know to turn your photos into adorable plushie designs. Whether you're creating plushies of yourself, friends, family, or pets, our AI-powered tool makes it fun and easy.
            </p>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-12 mb-12">
          {sections.map((section) => (
            <Card key={section.id} className="border-2 border-pink-200 dark:border-pink-900/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <section.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {section.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Pro Tips</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tips.map((tip, index) => (
              <Card key={index} className="border-2 border-pink-200 dark:border-pink-900/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                      <tip.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-900/30">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Reference</CardTitle>
            <CardDescription>
              Key information at a glance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4 bg-pink-50 dark:bg-pink-950/10 rounded-lg">
                <Upload className="h-8 w-8 mx-auto mb-2 text-pink-600 dark:text-pink-400" />
                <h3 className="font-semibold mb-1">Upload</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">JPG, PNG, WEBP up to 10MB</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/10 rounded-lg">
                <Palette className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold mb-1">Styles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">4 unique styles available</p>
              </div>
              <div className="text-center p-4 bg-pink-50 dark:bg-pink-950/10 rounded-lg">
                <Download className="h-8 w-8 mx-auto mb-2 text-pink-600 dark:text-pink-400" />
                <h3 className="font-semibold mb-1">Download</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">High-resolution PNG</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/10 rounded-lg">
                <Share2 className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold mb-1">Share</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Easy link sharing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your First Plushie?</h2>
              <p className="text-lg mb-8 opacity-90">
                Head over to the dashboard and start transforming your photos today!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 font-semibold shadow-lg"
              >
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
