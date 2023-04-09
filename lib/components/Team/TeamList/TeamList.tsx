"use client";
import { ITeamPerson } from "@/types/page.interface";
import { Person } from "./Person/Person";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef } from "react";
import Image from "next/image";

export const TeamList = ({ teamList }: { teamList: ITeamPerson[] }) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="team">
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 64,
          },
          1544: {
            slidesPerView: 5,
            spaceBetween: 56,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 64,
          },
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="teamSwiper"
      >
        {teamList?.map((el, key) =>
          el ? (
            <SwiperSlide>
              <Person
                key={key}
                photo={el.personImage.sourceUrl}
                name={el.personName}
                position={el.personPosition}
              />
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
