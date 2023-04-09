import { IImage } from "@/types/image.interface";
import { ICompanyAwards } from "@/types/page.interface";
import Image from "next/image";
import { Awards } from "./Awards/Awards";

export const About = ({
  title,
  content,
  companyImage,
  companyAwards,
}: {
  title: string;
  content: string;
  companyImage: IImage;
  companyAwards: ICompanyAwards[];
}) => {
  return (
    <div className="section">
      <div className="section_media">
        <Image
          src={companyImage.sourceUrl}
          alt={companyImage.altText}
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
        {companyAwards.length > 0 && <Awards companyAwards={companyAwards} />}
      </div>
    </div>
  );
};
