import { IImage } from "@/types/image.interface";
import Image from "next/image";
import Link from "next/link";

export const TouchRgb = ({
  title,
  content,
  touchRgbVideo,
  touchRgbVideoBg,
  touchRgbYoutubeLink,
  touchRgbYoutubeLinkAnchor
}: {
  title: string;
  content: string;
  touchRgbVideo: IImage;
  touchRgbVideoBg: IImage;
  touchRgbYoutubeLink: string;
  touchRgbYoutubeLinkAnchor: string;
}) => {
  return (
    <div>
      <div className="wrapper pb-0">
        {title && <div className="section__title">{title}</div>}
      </div>
      <div className="xl:pb-12 xxl:pb-14 xxxl:pb-16">
        <div className="touchRgb">
          <div className="touchRgb_video">
            <Image
              src={touchRgbVideoBg.sourceUrl}
              alt={touchRgbVideoBg.altText}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="touchRgb_wrap">
            <div className="wrapper xl:pb-0">
              <div className="touchRgb_wrap_content">
                <div className="touchRgb_wrap_content_dscr">{content}</div>
                <div className="touchRgb_wrap_content_youtube">
                  {touchRgbYoutubeLink && (
                    <Link
                      href={touchRgbYoutubeLink}
                      className="video_link max-w-1xl"
                    >
                      <span className="icon">
                        <Image
                          src="/icon-video.svg"
                          alt="video"
                          width={20}
                          height={16}
                        />
                      </span>
                      <span className="anchor">
                        {touchRgbYoutubeLinkAnchor}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
