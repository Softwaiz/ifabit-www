"use client";
import { useLayoutEffect } from "react";
import { inView, animate } from "motion";

export function AnimateWhenInView(props: { selector: string }) {
  useLayoutEffect(() => {
    inView(props.selector, (entry) => {
      animate(
        entry.target,
        {
          opacity: 1,
          transform: 'none'
        },
        {
          delay: 0.2,
          duration: 0.9,
          easing: "ease-in-out",
        }
      );
    });
  }, [props.selector]);

  return <></>;
}
