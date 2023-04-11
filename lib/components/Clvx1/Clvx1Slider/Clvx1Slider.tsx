"use client";
import { IImage } from "@/types/image.interface";
import { IDesignFeature, IDesignVideos } from "@/types/page.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef } from "react";
import Image from "next/image";

export const Clvx1Slider = ({ gallery }: { gallery: IImage[] }) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      {gallery.length > 0 && (
        <div className="clvx1Slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            loop={true}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="clvx1SliderSwiper"
          >
            {gallery?.map((el, key) =>
              el ? (
                <SwiperSlide key={key}>
                  <div className="clvx1Slider_gallery_item">
                    <Image
                      src={el.sourceUrl}
                      alt={el.altText}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
              ) : null
            )}
            <div
              className="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>
                <Image
                  src="/arrow.svg"
                  alt="prev"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </span>
            </div>
            <div
              className="next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>
                <Image
                  src="/arrow.svg"
                  alt="next"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </span>
            </div>
          </Swiper>
        </div>
      )}
    </>
  );
};
