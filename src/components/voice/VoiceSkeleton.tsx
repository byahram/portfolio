import Skeleton from "@/components/common/Skeleton";

export default function VoiceSkeleton() {
  return (
    <div id="giscus_wrap" className="max-w-3xl mx-auto">
      {/* Giscus Loading Skeleton */}
      <div className="p-4 border rounded-lg shadow bg-white dark:bg-black dark:border-neutral-700">
        <Skeleton className="h-6 w-1/2 mb-4 rounded" />
        <Skeleton className="h-4 w-full mb-2 rounded" />
        <Skeleton className="h-4 w-5/6 mb-2 rounded" />
        <Skeleton className="h-4 w-2/3 mb-4 rounded" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-6 w-20 rounded bg-neutral-300 dark:bg-neutral-700"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
