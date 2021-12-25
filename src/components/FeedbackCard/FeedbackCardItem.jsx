import { React, useContext } from "react";
import "./FeedbackCardItem.css";
import { FeedbackContext } from "../../Context";

const FeedbackCardItem = ({ item }) => {
  const { deleteFeedback } = useContext(
    FeedbackContext
  );
  return (
    <div className='itemContainer'>
      <div className='msg'>{item.msg}</div>
      <div className='modifyBtns'>
        <span>Edit</span>
        <span
          onClick={() => deleteFeedback(item)}
        >
          Delete
        </span>
      </div>
      <div className='floatingRating'>
        <span>{item.rating}</span>
      </div>
    </div>
  );
};

export default FeedbackCardItem;
