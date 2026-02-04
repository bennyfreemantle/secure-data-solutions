"use client";

import { useEffect, useState } from "react";

interface DelayedFallbackProps {
  delayMs?: number;
}

export function DelayedFallback({ delayMs = 350 }: DelayedFallbackProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  if (!show) return null;

  return (
    <div className="container-wide py-12 text-muted-foreground">
      Loading...
    </div>
  );
}
