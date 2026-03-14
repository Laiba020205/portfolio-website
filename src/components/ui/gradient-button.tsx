"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function GradientButton({
  children,
  className,
  containerClassName,
  ...props
}: GradientButtonProps) {
  return (
    <div className={cn("relative group inline-block", containerClassName)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 dark:from-amber-600 dark:to-orange-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button
        className={cn(
          "relative px-7 py-4 bg-background dark:bg-slate-900 rounded-lg leading-none flex items-center divide-x divide-gray-600",
          className
        )}
        {...props}
      >
        <span className="flex items-center space-x-2 w-full justify-center">
          {children}
        </span>
      </button>
    </div>
  );
}
