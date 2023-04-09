import { ISpecificationItem } from "@/types/page.interface";

export const SpecificationItem = ({
  specificationItem,
}: {
  specificationItem: ISpecificationItem;
}) => {
  return (
    <div className="specification_item">
      <div className="specification_name">
        {specificationItem.specificationItemName}
      </div>
      <div className="specification_value">
        {specificationItem.specificationItemValue}
      </div>
    </div>
  );
};
