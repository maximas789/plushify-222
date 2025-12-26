import Link from "next/link";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { FAQAccordion } from "@/components/docs/faq-accordion";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about Plushify"
        />

        {/* Introduction */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-900/30 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/10 dark:to-purple-950/10">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                  Can't find what you're looking for?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We're here to help! If you have a question that isn't covered in our FAQ, please check out our comprehensive user guide or contact our support team.
                </p>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View User Guide
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/dashboard">
                      Start Generating
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Accordion */}
        <Card className="mb-12 border-2 border-pink-200 dark:border-pink-900/30">
          <CardContent className="p-8">
            <FAQAccordion />
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-2 border-pink-200 dark:border-pink-900/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-950/20 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Getting Started
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Learn how to upload images, generate plushies, and manage your credits.
                </p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/docs">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 dark:border-pink-900/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-950/20 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Pricing & Credits
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Understand our credit-based pricing and choose the right plan for you.
                </p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 dark:border-pink-900/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-950/20 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Privacy & Legal
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Learn about how we protect your data and our terms of service.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="link" className="p-0 h-auto text-sm">
                    <Link href="/privacy">Privacy</Link>
                  </Button>
                  <span className="text-gray-400">·</span>
                  <Button asChild variant="link" className="p-0 h-auto text-sm">
                    <Link href="/terms">Terms</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our support team is here to help you create the perfect plushie!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 font-semibold shadow-lg"
              >
                <Link href="/dashboard">
                  Start Creating
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
