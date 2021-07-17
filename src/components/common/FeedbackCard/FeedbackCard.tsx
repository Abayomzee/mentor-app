import React from "react";
import Tag from "../Tag/Tag";
import Typography from "../Typography/Typography";

interface Props {
  frequency?: any;
  title?: any;
  description?: any;
  tagCategory?: any;
  commentCount?: any;
}
const FeedbackCard: React.FC<Props> = ({
  frequency,
  title,
  description,
  tagCategory,
  commentCount,
}) => {
  return (
    <div className="feedback-card">
      <div>
        <div className="feedback-card__frequency">
          <i className="fas fa-chevron-up text-center feedback-card__frequency__icon"></i>
          <Typography
            Element="h5"
            text={frequency}
            cssClass="h-6 center-item"
          />
        </div>
      </div>

      {/*  */}
      <div className="m-l-30px">
        <Typography Element="h5" text={title} cssClass="h-7 m-b-10px" />
        <Typography Element="p" text={description} cssClass="p-2 m-b-20px" />
        <Tag text={tagCategory} />
      </div>

      <div className="flex-r-aicenter m-l-auto feedback-card__comment">
        <i className="fas fa-comment  m-r-5px feedback-card__comment-icon"></i>
        <Typography Element="p" text={commentCount} cssClass="p-2" />
      </div>
    </div>
  );
};

export default FeedbackCard;
