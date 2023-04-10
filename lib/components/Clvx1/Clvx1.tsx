import { IImage } from "@/types/image.interface";
import { IClvx1List } from "@/types/page.interface";
import Image from "next/image";
import { Clvx1Slider } from "./Clvx1Slider/Clvx1Slider";

export const Clvx1 = ({
  title,
  clvx1Gallery,
  clvx1List,
}: {
  title: string;
  clvx1Gallery: IImage[];
  clvx1List: IClvx1List[];
}) => {
  return (
    <div className="section">
      <div className="section_media md:order-first">
        <Clvx1Slider gallery={clvx1Gallery} />
      </div>
      <div className="wrapper section_wrapper md:order-last">
        <div>
          <div>
            {title && <div className="section__title text-left">{title}</div>}
          </div>
          {clvx1List.length > 0 && (
            <div className="section_list">
              {clvx1List?.map((el, key) =>
                el ? (
                  <div key={key} className="section_list_item">
                    {el.clvx1ListIcon.sourceUrl && (
                      <div className="section_list_item_icon">
                        <Image
                          src={el.clvx1ListIcon.sourceUrl}
                          alt={el.clvx1ListIcon.altText}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    )}
                    {el.clvx1ListDescription && (
                      <div className="section_list_item_dscr">
                        {el.clvx1ListDescription}
                      </div>
                    )}
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
