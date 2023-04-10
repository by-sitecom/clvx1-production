import { IImage } from "@/types/image.interface";
import Image from "next/image";

export const Main = ({ title, video }: { title: string; video: IImage }) => {
  return (
    <div className="main">
      <div className="main_video">
        {video.sourceUrl && (
          <Image
            src={video.sourceUrl}
            alt={video.altText}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      {title && (
        <div dangerouslySetInnerHTML={{ __html: title }} className="main_dscr">
        </div>
      )}
    </div>
  );
};
