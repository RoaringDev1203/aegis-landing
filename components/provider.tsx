"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};

export { Provider };
