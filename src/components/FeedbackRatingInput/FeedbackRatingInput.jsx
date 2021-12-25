import React from "react";
import "./FeedbackRatingInput.css";

const FeedbackRatingInput = () => {
  return (
    <div className='inputContainer'>
      <input
        type='text'
        className='form-control'
      />
      <button className='addFeebackBTN'>
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackRatingInput;
