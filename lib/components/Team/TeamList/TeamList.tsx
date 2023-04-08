"use client";
import { ITeamPerson } from "@/types/page.interface";
import { Person } from "./Person/Person";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export const TeamList = ({ teamList }: { teamList: ITeamPerson[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      navigation={true}
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
      className="mySwiper"
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
  );
};
