"use client";
import { IImage } from "@/types/image.interface";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
export const TypeTouch = ({
  title,
  content,
  typeTouchVideo,
}: {
  title: string;
  content: string;
  typeTouchVideo: IImage;
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  return (
    <div className="wrapper pl-0 pr-0" id="type-and-touch">
      {title && <div className="section__title">{title}</div>}

      {content && (
        <div
          className="section__dscr"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}

      <div className="typeTouch">
        <div className="typeTouch_video overflow-hidden">
          {/*
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
          >
            <source src="/gestures.mp4" type="video/mp4" />
          </video>
          */}
          <Image
            src={typeTouchVideo.sourceUrl}
            alt={typeTouchVideo.altText}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="typeTouch_wrapper">
          <div className="typeTouch_wrap">
            <div className="typeTouch_block">
              <div className="typeTouch_block_title">Personalisation</div>
              <div className="mark mb-3">In development</div>
              <div className="typeTouch_block_description">
                CLVX 1 optimises gestures recognition sensitivity based on your
                typing habits
              </div>
            </div>

            <div className="typeTouch_block">
              <div className="typeTouch_block_title">Real working videos</div>
              <div className="typeTouch_block_description">
                With Gesture, Typing, Recognition, Touch Sliders and more
              </div>
              <div className="typeTouch_block_btns">
                <Link className="typeTouch_block_btn" href="">
                  <Image
                    src="/windows.svg"
                    alt="windows"
                    width={85.19}
                    height={18}
                  />
                </Link>
                <Link className="typeTouch_block_btn" href="">
                  <Image
                    src="/linux.svg"
                    alt="linux"
                    width={83.72}
                    height={32}
                  />
                </Link>
              </div>
            </div>
            <div className="typeTouch_block">
              <div className="typeTouch_block_title">
                How the Recognition algorithms work
              </div>
              <Link href="/" className="video_link">
                <span className="icon">
                  <Image
                    src="/icon-video.svg"
                    alt="video"
                    width={20}
                    height={16}
                  />
                </span>
                <span className="anchor">
                  Interview with Clevetura lead firmware engineer
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
