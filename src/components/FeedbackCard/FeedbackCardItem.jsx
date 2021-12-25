import React from "react";
import "./FeedbackCardItem.css";

const FeedbackCardItem = ({ item }) => {
  return (
    <div className='itemContainer'>
      {item.msg}
    </div>
  );
};

export default FeedbackCardItem;
