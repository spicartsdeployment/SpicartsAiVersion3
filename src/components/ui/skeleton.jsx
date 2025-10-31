import React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\ui\skeleton.tsx