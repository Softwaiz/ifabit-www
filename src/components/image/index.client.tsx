"use client";
import { ImgHTMLAttributes, useEffect, useState } from "react";

export const AssetImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (props.src) {
      fetch(`/asset?file=${props.src}`)
        .then((res) => res.json())
        .then((res: { url: string }) => {
          if (res.url) {
            setSrc(res.url || "");
          }
        });
    }
  }, [props.src]);

  if (!src) {
    return <></>;
  }
  return <img {...props} src={src} />;
};
