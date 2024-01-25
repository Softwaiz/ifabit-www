import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useNodeRect } from "@/hooks/useNodeRect";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

export type HeaderWrapperProps = {
  hasBorder?: boolean;
  wrapperClassName?: string;
  className?: string;
  styled?: boolean;
};

export function HeaderWrapper({
  hasBorder = false,
  wrapperClassName = "",
  className = "",
  children,
  styled = false,
}: PropsWithChildren<HeaderWrapperProps>) {
  const headerRef = useRef<HTMLDivElement>();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const { client } = useNodeRect(headerRef as any);

  useEffect(() => {
    if (client) {
      let root = document.querySelector(":root") as HTMLHtmlElement;
      root.style.setProperty("--header-height", `${client.height || 0}px`);

      return () => {
        if (root) {
          root.style.removeProperty("--header-height");
        }
      };
    }
  }, [client]);

  return (
    <div
      ref={ref}
      className={cn("w-full ", styles["header-wrapper"], wrapperClassName)}
    >
      <header
        ref={(el) => ((headerRef.current as any) = el)}
        className={cn(hasBorder ? "border-b" : "", styles.header, className)}
        data-inview={inView}
        data-styled={styled}
      >
        {children}
      </header>
    </div>
  );
}
