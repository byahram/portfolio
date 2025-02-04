import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

const BadgeText = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded border border-neutral-300 bg-neutral-100 py-1 px-2 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100">
      {children}
    </span>
  );
};

export default BadgeText;
