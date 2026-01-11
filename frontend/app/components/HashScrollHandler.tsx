"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash scroll after page loads (for navigation from other pages)
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return null;
}
