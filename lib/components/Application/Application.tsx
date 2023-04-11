"use client";
import { IImage } from "@/types/image.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IApplicationSettings,
  IApplicationSupport,
} from "@/types/page.interface";

export const Application = ({
  title,
  content,
  inDevelopment,
  settings,
  support,
}: {
  title: string;
  content: string;
  inDevelopment: boolean;
  settings: IApplicationSettings[];
  support: IApplicationSupport[];
}) => {
  const swiperSettings = useRef<SwiperType>();
  const swiperSupport = useRef<SwiperType>();
  const [isOpenBtn, setIsOpenBtn] = useState("settings");
  const [isOpenBtnSettings, setIsOpenBtnSettings] = useState(
    settings[0].applicationSettingsTitle
  );
  const [isOpenBtnSupport, setIsOpenBtnSupport] = useState(
    support[0].applicationSupportTitle
  );

  return (
    <div className="wrapper pt-0" id="application">
      {title && <div className="section__title">{title}</div>}
      {inDevelopment && (
        <div className="mark_wrap">
          <span className="mark">In Development</span>
        </div>
      )}

      {content && (
        <div
          className="section__dscr"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}

      <div className="application">
        <div className="application_btns">
          <div
            onClick={() => setIsOpenBtn("settings")}
            className={`application_btn ${
              isOpenBtn == "settings" ? "active" : ""
            }`}
          >
            Settings
          </div>
          <div
            onClick={() => setIsOpenBtn("support")}
            className={`application_btn ${
              isOpenBtn == "support" ? "active" : ""
            }`}
          >
            Support
          </div>
        </div>
        <div>
          <div
            className={`application_item ${
              isOpenBtn == "settings" ? "active" : ""
            }`}
          >
            <div className="application_slider">
              <Swiper
                slidesPerView={1}
                spaceBetween={32}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                  1544: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                  1800: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                }}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperSettings.current = swiper;
                }}
                className="settingsSwiper"
              >
                {settings?.map((el, key) =>
                  el ? (
                    <SwiperSlide key={key}>
                      <div
                        onClick={() =>
                          setIsOpenBtnSettings(el.applicationSettingsTitle)
                        }
                        className={`application_item_slide ${
                          isOpenBtnSettings == el.applicationSettingsTitle
                            ? "active"
                            : ""
                        }`}
                      >
                        {el.applicationSettingsTitle}
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
              <div
                className="prev"
                onClick={() => swiperSettings.current?.slidePrev()}
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
                onClick={() => swiperSettings.current?.slideNext()}
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
            <div className="application_settings_content">
              {settings?.map((el, key) =>
                el ? (
                  <div
                    key={key}
                    className={`application_content ${
                      isOpenBtnSettings == el.applicationSettingsTitle
                        ? "active"
                        : ""
                    }`}
                  >
                    {el.applicationSettingsDescription?.map((el, key) =>
                      el ? (
                        <div key={key} className={`application_content_item`}>
                          {el.applicationSettingsDescriptionValue}
                        </div>
                      ) : null
                    )}
                    {el.applicationSettingsImage.sourceUrl && (
                      <div className="application_image">
                        <Image
                          src={el.applicationSettingsImage.sourceUrl}
                          alt={el.applicationSettingsImage.altText}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div
            className={`application_item ${
              isOpenBtn == "support" ? "active" : ""
            }`}
          >
            <div className="application_slider">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={32}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                  1544: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                  1800: {
                    slidesPerView: 4,
                    spaceBetween: 64,
                  },
                }}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperSupport.current = swiper;
                }}
                className="supportSwiper"
              >
                {support?.map((el, key) =>
                  el ? (
                    <SwiperSlide key={key}>
                      <div
                        onClick={() =>
                          setIsOpenBtnSupport(el.applicationSupportTitle)
                        }
                        className={`application_item_slide ${
                          isOpenBtnSupport == el.applicationSupportTitle
                            ? "active"
                            : null
                        }`}
                      >
                        {el.applicationSupportTitle}
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
              <div
                className="prev"
                onClick={() => swiperSupport.current?.slidePrev()}
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
                onClick={() => swiperSupport.current?.slideNext()}
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
            <div className="application_support_content">
              {support?.map((el, key) =>
                el ? (
                  <div
                    key={key}
                    className={`application_content ${
                      isOpenBtnSupport == el.applicationSupportTitle
                        ? "active"
                        : ""
                    }`}
                  >
                    {el.applicationSupportDescription?.map((el, key) =>
                      el ? (
                        <div key={key} className={`application_content_item`}>
                          {el.applicationSupportDescriptionValue}
                        </div>
                      ) : null
                    )}
                    {el.applicationSupportImage.sourceUrl && (
                      <div className="application_image">
                        <Image
                          src={el.applicationSupportImage.sourceUrl}
                          alt={el.applicationSupportImage.altText}
                          layout="fill"
                          objectFit="contain"
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
