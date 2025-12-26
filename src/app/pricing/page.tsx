import Link from "next/link";
import { Check, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Basic",
    credits: 30,
    price: 9,
    description: "Perfect for trying out Plushify",
    features: [
      "30 plushie generations",
      "Standard quality output",
      "All 4 style options",
      "Email support",
      "Basic download formats",
    ],
    popular: false,
  },
  {
    name: "Pro",
    credits: 100,
    price: 19,
    description: "Best value for regular users",
    features: [
      "100 plushie generations",
      "High quality output",
      "All 4 style options",
      "Priority support",
      "Advanced download formats",
      "Commercial usage rights",
    ],
    popular: true,
  },
  {
    name: "Elite",
    credits: 200,
    price: 29,
    description: "For power users and businesses",
    features: [
      "200 plushie generations",
      "Ultra high quality output",
      "All 4 style options",
      "24/7 priority support",
      "All download formats",
      "Commercial usage rights",
      "API access",
      "Bulk processing",
    ],
    popular: false,
  },
];

const featureComparison = [
  { feature: "Plushie Generations", basic: "30", pro: "100", elite: "200" },
  { feature: "Output Quality", basic: "Standard", pro: "High", elite: "Ultra High" },
  { feature: "Style Options", basic: "All 4", pro: "All 4", elite: "All 4" },
  { feature: "Support Level", basic: "Email", pro: "Priority", elite: "24/7 Priority" },
  { feature: "Download Formats", basic: "Basic", pro: "Advanced", elite: "All Formats" },
  { feature: "Commercial Rights", basic: false, pro: true, elite: true },
  { feature: "API Access", basic: false, pro: false, elite: true },
  { feature: "Bulk Processing", basic: false, pro: false, elite: true },
];

const faqItems = [
  {
    question: "What are credits and how do they work?",
    answer: "Credits are used to generate plushies. Each plushie generation consumes 1 credit. Credits never expire, so you can use them whenever you want. Simply purchase a credit package and start creating adorable plushies from your photos!",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can purchase additional credit packages at any time. There's no need to upgrade - just buy more credits when you need them. Your existing credits will remain in your account.",
  },
  {
    question: "What's the difference between quality levels?",
    answer: "Standard quality produces great results for casual use. High quality offers better details and resolution, perfect for sharing on social media. Ultra High quality provides the best possible output with maximum detail, ideal for printing or professional use.",
  },
  {
    question: "Do credits expire?",
    answer: "No! Credits never expire. Once you purchase them, they're yours to use whenever you want. There's no pressure to use them quickly.",
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a satisfaction guarantee. If you're not happy with your purchase, please contact our support team within 14 days for a full refund. No questions asked.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment partners.",
  },
  {
    question: "What are commercial usage rights?",
    answer: "Commercial usage rights allow you to use generated plushies for business purposes, including selling products, marketing materials, or client work. Basic plans include personal use only, while Pro and Elite plans include commercial rights.",
  },
  {
    question: "How does API access work?",
    answer: "The Elite plan includes API access, allowing you to integrate Plushify's generation capabilities into your own applications. You'll receive API documentation and access keys upon purchase.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your plushie creation needs. No subscriptions, pay as you go!"
        />

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                tier.popular
                  ? "border-4 border-pink-400 dark:border-pink-600 shadow-2xl shadow-pink-500/20 scale-105"
                  : "border-2 border-pink-200 dark:border-pink-900/30 hover:border-pink-300 dark:hover:border-pink-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {tier.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">
                      ${tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    for {tier.credits} credits
                  </p>
                  <p className="text-xs text-pink-600 dark:text-pink-400 mt-2 font-medium">
                    ${(tier.price / tier.credits).toFixed(2)} per credit
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/25"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/20"
                  }`}
                  size="lg"
                >
                  <Link href="/dashboard">
                    {tier.popular && <Sparkles className="mr-2 h-4 w-4" />}
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Compare all plans side by side to find the perfect fit
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-pink-200 dark:border-pink-900/30">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-200 dark:border-pink-900/30">
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100 min-w-[200px]">
                        Feature
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100 min-w-[100px]">
                        Basic
                      </th>
                      <th className="text-center p-4 font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white min-w-[100px]">
                        Pro
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-900 dark:text-gray-100 min-w-[100px]">
                        Elite
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-pink-100 dark:border-pink-900/20 hover:bg-pink-50/50 dark:hover:bg-pink-950/10 transition-colors"
                      >
                        <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center text-gray-600 dark:text-gray-400">
                          {typeof row.basic === "boolean" ? (
                            row.basic ? (
                              <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            row.basic
                          )}
                        </td>
                        <td className="p-4 text-center bg-pink-50/50 dark:bg-pink-950/20 text-gray-900 dark:text-gray-100 font-medium">
                          {typeof row.pro === "boolean" ? (
                            row.pro ? (
                              <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="p-4 text-center text-gray-600 dark:text-gray-400">
                          {typeof row.elite === "boolean" ? (
                            row.elite ? (
                              <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            row.elite
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <Card className="border-2 border-pink-200 dark:border-pink-900/30">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Adorable Plushies?</h2>
              <p className="text-lg mb-8 opacity-90">
                Start generating today with our simple credit-based pricing
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 font-semibold shadow-lg"
              >
                <Link href="/dashboard">
                  Start Generating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-full bg-white dark:bg-gray-800 px-8 py-4 shadow-lg">
            <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300 gap-1">
              <Check className="h-3 w-3" />
              Credits Never Expire
            </Badge>
            <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300 gap-1">
              <Check className="h-3 w-3" />
              No Hidden Fees
            </Badge>
            <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300 gap-1">
              <Check className="h-3 w-3" />
              Secure Payments
            </Badge>
            <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300 gap-1">
              <Check className="h-3 w-3" />
              14-Day Refund Policy
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
