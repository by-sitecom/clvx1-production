"use client";
import { IRoadMap } from "@/types/page.interface";
import { RoadMapItem } from "./RoadMapItem/RoadMapItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef } from "react";
import Image from "next/image";
import { IImage } from "@/types/image.interface";

export const RoadMap = ({
  title,
  content,
  roadMap,
  gallery,
}: {
  title: string;
  content: string;
  roadMap: IRoadMap[];
  gallery:IImage[]
}) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="wrapper" id="roadmap">
      {title && <div className="section__title">{title}</div>}

      {content && (
        <div
          className="section__dscr"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
      <div className="roadMap">
        {roadMap.length > 0 && (
          <div className="roadMap_list">
            <Swiper
              initialSlide={roadMap.length}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1544: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
                1800: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="roadMapSwiper"
            >
              {roadMap?.map((el, key) =>
                el ? (
                  <SwiperSlide>
                    <RoadMapItem roadMapItem={el} />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
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
          </div>
        )}
        {/*gallery.length > 0 && (
          <div className="roadMap_gallery">
            {gallery?.map((el, key) =>
              el ? (
                <div className="roadMap_gallery_item">
                  <Image
                    src={el.sourceUrl}
                    alt={el.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              ) : null
            )}
          </div>
              )*/}
      </div>
    </div>
  );
};
