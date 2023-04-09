import { ISpecificationGroup } from "@/types/page.interface";
import { SpecificationItem } from "../SpecificationItem/SpecificationItem";

export const SpecificationGroup = ({
  specificationGroup,
}: {
  specificationGroup: ISpecificationGroup;
}) => {
  return (
    <div className="specification_group">
      {specificationGroup.specificationGroupTitle && (
        <div className="specification_title">
          {specificationGroup.specificationGroupTitle}
        </div>
      )}
      {specificationGroup.specificationItem.length && (
        <div className="specification_items">
          {specificationGroup.specificationItem?.map((el, key) =>
            el ? <SpecificationItem key={key} specificationItem={el} /> : null
          )}
        </div>
      )}
    </div>
  );
};
