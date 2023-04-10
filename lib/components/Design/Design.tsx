"use client";
import { IImage } from "@/types/image.interface";
import { IDesignFeature, IDesignVideos } from "@/types/page.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const Design = ({
  title,
  content,
  gallery,
  featuresTitle,
  features,
	videos
}: {
  title: string;
  content: string;
  gallery: IImage[];
  featuresTitle: string;
  features: IDesignFeature[];
	videos:IDesignVideos[]
}) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="wrapper pl-0 pr-0">
      {title && <div className="section__title">{title}</div>}

      {content && (
        <div
          className="section__dscr"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}

      <div className="design">
        {gallery.length > 0 && (
          <div className="design_gallery">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="designSwiper"
            >
              {gallery?.map((el, key) =>
                el ? (
                  <SwiperSlide key={key}>
                    <div className="design_gallery_item">
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
        <div className="design_features">
          <div className="design_features_wrap">
            {featuresTitle && (
              <div className="design_features_title">{featuresTitle}</div>
            )}
            {features.length > 0 && (
              <div className="design_features_list">
                {features?.map((el, key) =>
                  el ? <div key={key}>{el.featureItem}</div> : null
                )}
              </div>
            )}
            <div className="design_features_list"></div>
          </div>
          {videos && (
            <div className="design_videos">
              {videos?.map((el, key) =>
                el ? (
                  <Link
                    key={key}
                    href={el.designVideoUrl}
                    className="video_link_v"
                  >
                    <span className="icon">
                      <Image
                        src="/icon-video.svg"
                        alt="video"
                        width={20}
                        height={16}
                      />
                    </span>
                    <span className="anchor">{el.designVideoAnchor}</span>
                  </Link>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
