import React from "react";

interface BadgeProps {
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  children: React.ReactNode;
}

const BadgeLink = ({ props, children }: BadgeProps) => {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-300 bg-neutral-100 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      {children}
    </a>
  );
};

export default BadgeLink;
