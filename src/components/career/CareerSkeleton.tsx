import Skeleton from "@/components/common/Skeleton";
import Line from "@/components/common/Line";
import React from "react";

export default function CareerSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-6" />
      </div>

      {[1, 2].map((_, index) => (
        <React.Fragment key={index}>
          <Line />
          <div key={index} className="space-y-3">
            <Skeleton className="w-40 h-6" />
            <Skeleton className="w-60 h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-5/6 h-4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-28 h-8" />
            {[1, 2].map((_, index) => (
              <Skeleton key={index} className="w-full h-6" />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
