import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="space-y-4 p-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-start px-6 py-4 gap-4 border-l border-success rounded-md"
        >
          <div className="skeleton w-16 h-16 rounded-full"></div>

          <div className="flex-1 space-y-2">
            <div className="skeleton h-4 w-40"></div>
            <div className="skeleton h-3 w-52"></div>
            <div className="skeleton h-3 w-full"></div>
          </div>

          <div className="flex sm:flex-col gap-2">
            <div className="skeleton w-8 h-8"></div>
            <div className="skeleton w-8 h-8"></div>
            <div className="skeleton w-8 h-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
