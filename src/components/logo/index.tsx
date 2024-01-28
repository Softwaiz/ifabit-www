import { ImgHTMLAttributes } from "react";

export function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/logo.png"
      alt="Logo Ifabit"
      className="bg-transparent h-[56px] w-auto object-cover object-center aspect-auto"
      {...props}
    />
  );
}
