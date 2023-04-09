import { ISpecificationGroup } from "@/types/page.interface";
import { SpecificationGroup } from "./SpecificationGroup/SpecificationGroup";

export const Specification = ({
  title,
  content,
  specification,
}: {
  title: string;
  content: string;
  specification: ISpecificationGroup[];
}) => {
  return (
      <div className="wrapper">
        {title && <div className="section__title">{title}</div>}

        {content && (
          <div
            className="section__dscr"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}

        {specification.length > 0 && (
          <div className="specification">
            {specification?.map((el, key) =>
              el ? (
                <SpecificationGroup key={key} specificationGroup={el} />
              ) : null
            )}
          </div>
        )}
      </div>
  );
};
