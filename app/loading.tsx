"use client";

import { DelayedFallback } from "@/components/ui/delayed-fallback";

export default function Loading() {
  return <DelayedFallback delayMs={150} />;
}
