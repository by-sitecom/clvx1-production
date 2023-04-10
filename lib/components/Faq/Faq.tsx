import { IFaq } from "@/types/page.interface";
import { FaqList } from "./FaqList/FaqList";

export const Faq = ({
  title,
  content,
  faqList,
}: {
  title: string;
  content: string;
  faqList: IFaq[]
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
      {faqList.length > 0 && <FaqList faqList={faqList} />}
    </div>
  );
};
