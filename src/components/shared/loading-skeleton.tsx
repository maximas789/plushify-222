import { Skeleton } from "@/components/ui/skeleton";

export function LoadingCard() {
  return (
    <div className="rounded-lg border p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

export function LoadingGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}

export function LoadingPageHeader() {
  return (
    <div className="space-y-2 mb-8">
      <Skeleton className="h-9 w-64" />
      <Skeleton className="h-6 w-full max-w-md" />
    </div>
  );
}

export function LoadingPlushiePreview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-64 w-full rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-64 w-full rounded-md" />
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-900">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
