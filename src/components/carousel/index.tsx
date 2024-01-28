"use client";
import styles from "./index.module.scss";
import { FC, ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropType = {
  children: ReactNode[];
  options?: EmblaOptionsType;
};

export const Carousel: FC<PropType> = (props) => {
  const { children, options } = props;
  const [emblaRef, api] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {children.map((c, index) => (
            <div className={styles.embla__slide} key={index}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="swipe to left"
        onClick={() => {
          if (api?.canScrollPrev()) {
            api.scrollPrev();
          }
        }}
        className={styles.arrow__left}
      >
        <ChevronLeft fontSize={"26px"} />
      </button>
      <button
        aria-label="swipe to right"
        onClick={() => {
          if (api?.canScrollNext()) {
            api.scrollNext();
          }
        }}
        className={styles.arrow__right}
      >
        <ChevronRight fontSize={"26px"} />
      </button>
    </div>
  );
};

export default Carousel;
