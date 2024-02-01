import { CallToAction } from "@/blocks/home/call-to-action";
import { cn } from "@/lib/utils";
import "@/styles/home.scss";
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from "react";

function Member({
  name,
  title,
  imageProps,
}: {
  name: string;
  title: string;
  imageProps?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 rounded-md shadow-md">
      <img
        src={imageProps?.src}
        alt={name || imageProps?.alt}
        {...imageProps}
        className={cn(
          "w-full h-[320px] rounded-md object-cover object-center",
          imageProps?.className
        )}
      />
      <div className="w-full flex flex-col items-center justify-end py-4">
        <h2 className="font-heading font-bold text-2xl text-center">{name}</h2>
        <h3 className="text-sm opacity-80">{title}</h3>
      </div>
    </div>
  );
}

export default function OurTeam() {
  return (
    <>
      <div className="w-full mt-header text-slate-900">
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-layer">
          <div className="absolute top-0 left-0 bg-layer w-4/6 aspect-square rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="container relative text-slate-100 min-h-[calc(50vh-var(--header-height))] flex flex-col items-center justify-center">
            <h2 className="font-heading font-bold text-6xl max-w-[30ch] text-center">
              Key people
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="container flex flex-row flex-wrap items-start justify-center gap-4 px-4 lg:px-0 py-[4rem]">
            <div className="w-full lg:w-[460px]">
              <Member
                imageProps={{
                  src: "/adnk.jpeg",
                }}
                name="Abdel-Kader DANGO-NADEY"
                title="Analyste Financier | Ceo DANGO-NADEY Groupe"
              />
            </div>
            <div className="w-full lg:w-[460px]">
              <Member
                imageProps={{
                  src: "/max.png",
                  className: "bg-orange-100 object-top",
                }}
                name="Maximilien COMLAN"
                title="Tech Lead @Softwaiz"
              />
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </>
  );
}
