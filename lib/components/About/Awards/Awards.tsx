"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef } from "react";
import Image from "next/image";
import { ICompanyAwards } from "@/types/page.interface";

export const Awards = ({ companyAwards }: { companyAwards: ICompanyAwards[] }) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="awards">
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="awardsSwiper"
      >
        {companyAwards?.map((el, key) =>
          el ? (
            <SwiperSlide key={key}>
              <div className="award">
                <Image
                  src={el.companyAwardImage.sourceUrl}
                  alt={el.companyAwardImage.altText}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
      <div className="prev" onClick={() => swiperRef.current?.slidePrev()}>
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
      <div className="next" onClick={() => swiperRef.current?.slideNext()}>
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
  );
};
