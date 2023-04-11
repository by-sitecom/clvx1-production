"use client";
import { IImage } from "@/types/image.interface";
import Image from "next/image";
import { useRef, useEffect } from "react";
export const BrightnessControl = ({
  title,
  content,
  brightnessImage,
}: {
  title: string;
  content: string;
  brightnessImage: IImage;
}) => {
  const videoRef: any = useRef(null);
  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <div className="section">
      <div className="section_media md:order-last">
        <video
          ref={videoRef}
          controls={false}
          loop
          muted
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "150%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        ><source src="/auto.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="wrapper section_wrapper md:order-first">
        <div>
          <div>
            {title && <div className="section__title text-left">{title}</div>}
          </div>
          {content && (
            <div className="section__content">
              <div
                className="section__dscr text-left"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
