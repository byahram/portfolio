import Skeleton from "@/components/common/Skeleton";

export default function ProjectSkeleton() {
  return (
    <div>
      {/* Tech Stack Loading Skeleton */}
      <div className="mb-8 flex flex-wrap gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-8 w-20 rounded bg-neutral-300 dark:bg-neutral-700"
          />
        ))}
      </div>

      {/* Projects List Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow bg-white dark:bg-black dark:border-neutral-700"
          >
            <Skeleton className="relative w-full h-32 rounded-md mb-4" />
            <Skeleton className="h-6 w-2/3 mb-2 rounded bg-neutral-300 dark:bg-neutral-700" />
            <Skeleton className="h-4 w-1/2 rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  className="h-6 w-10 rounded bg-neutral-300 dark:bg-neutral-700"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
