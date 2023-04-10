import { IImage } from "@/types/image.interface";
import Image from "next/image";

export const BrightnessControl = ({
  title,
  content,
  brightnessImage,
}: {
  title: string;
  content: string;
  brightnessImage: IImage;
}) => {
  return (
    <div className="section">
      <div className="section_media md:order-last">
        <Image
          src={brightnessImage.sourceUrl}
          alt={brightnessImage.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
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
