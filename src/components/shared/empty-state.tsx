import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = "No plushies yet",
  description = "Create your first adorable plushie by uploading a photo and customizing the style.",
  ctaText = "Create Your First Plushie",
  ctaHref = "/dashboard",
  icon,
}: EmptyStateProps) {
  return (
    <Card className="p-12 text-center border-dashed">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-primary/10">
          {icon || <Sparkles className="h-12 w-12 text-primary" />}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">{description}</p>
      <Button asChild size="lg" className="group">
        <Link href={ctaHref}>
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </Card>
  );
}
