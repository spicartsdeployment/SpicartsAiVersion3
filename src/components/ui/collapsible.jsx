"use client";

import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

function Collapsible(props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent(props) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
// filepath: d:\React_projects\spicarts_projects\spicartsAiv2\spicartsAi\src\components\ui\collapsible.tsx