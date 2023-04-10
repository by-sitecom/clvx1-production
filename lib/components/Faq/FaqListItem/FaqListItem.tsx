
export const FaqListItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="faq_item">
      <div>
        {question && <div className="faq_question">{question}</div>}
        {answer && (
          <div
            className="faq_answer"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></div>
        )}
      </div>
    </div>
  );
};
