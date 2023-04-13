"use client";
import { IImage } from "@/types/image.interface";
import Image from "next/image";
import { useRef, useEffect } from "react";
export const Main = ({ title, video }: { title: string; video: IImage }) => {
  const videoRef: any = useRef(null);
  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <div className="main">
      <div className="main_video">
        <video
          poster="/clvx1.jpg"
          ref={videoRef}
          controls={false}
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        >
          <source src="/clvx1.mp4" type="video/mp4" />
        </video>
      </div>
      {title && (
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="main_dscr"
        ></div>
      )}
    </div>
  );
};
