import { IImage } from "@/types/image.interface";
import Image from "next/image";

export const About = ({
  title,
  content,
  companyImage,
  companyAwards,
}: {
  title: string;
  content: string;
  companyImage: IImage;
  companyAwards: IImage[];
}) => {
  return (
    <div className="wrapper">
      <div className="section_media">
        <Image
          src={companyImage.sourceUrl}
          alt={companyImage.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="section bb">
        <div>{title && <div className="section__title">{title}</div>}</div>

        {content && (
          <div
            className="section__dscr"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
      </div>
    </div>
  );
};
