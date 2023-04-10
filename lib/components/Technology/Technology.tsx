import { IImage } from "@/types/image.interface";
import Image from "next/image";
import Link from "next/link";

export const Technology = ({
  title,
  content,
  technologyImage,
  videoAnchor,
  videoUrl,
}: {
  title: string;
  content: string;
  technologyImage: IImage;
  videoAnchor:string,
  videoUrl:string,
}) => {
  return (
    <div className="section">
      <div className="section_media">
        <Image
          src={technologyImage.sourceUrl}
          alt={technologyImage.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="wrapper section_wrapper">
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
        {videoUrl && (
          <Link href={videoUrl} className="video_link">
            <span className="icon">
              <Image src="/icon-video.svg" alt="video" width={20} height={16} />
            </span>
            <span className="anchor">{videoAnchor}</span>
          </Link>
        )}
      </div>
    </div>
  );
};
