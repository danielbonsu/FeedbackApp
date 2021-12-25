import { React, useContext } from "react";
import { FeedbackContext } from "../../Context";
import FeedbackCardItem from "./FeedbackCardItem";
import "./FeedbackCard.css";

const FeedBackCard = () => {
  const { feedbackData } = useContext(
    FeedbackContext
  );

  return (
    <div className='card'>
      {feedbackData &&
        feedbackData.map((item) => (
          <FeedbackCardItem item={item} />
        ))}
    </div>
  );
};

export default FeedBackCard;
