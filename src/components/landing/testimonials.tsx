import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/mock-data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Loved by <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our happy customers are saying about their plushie creations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-300 dark:hover:border-pink-700"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <circle cx="50" cy="50" r="50" fill="#F472B6" />
                      <circle cx="50" cy="40" r="20" fill="#FCE7F3" />
                      <path d="M20 85C20 68.4315 33.4315 55 50 55C66.5685 55 80 68.4315 80 85" fill="#FCE7F3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">50K+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Plushies Created</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">4.9★</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
