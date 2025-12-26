import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
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

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Simple, <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Credit-Based</span> Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No subscriptions, pay as you go!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
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
                  <Link href="/pricing">
                    {tier.popular && <Sparkles className="mr-2 h-4 w-4" />}
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-6 py-3 shadow-lg">
            <Badge variant="outline" className="border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-300">
              💡
            </Badge>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Credits never expire • No hidden fees • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
