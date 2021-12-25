import { React, useState } from "react";
import "./FeedbackRatingInput.css";

const FeedbackRatingInput = ({
  setRatingMsg,
}) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const sendFeedback = () => {
    setRatingMsg(text);
  };

  return (
    <div className='inputContainer'>
      <input
        type='text'
        value={text}
        onChange={onChange}
        className='form-control'
        placeholder='Enter Feedback Message'
      />
      <button
        onClick={sendFeedback}
        className='addFeebackBTN'
      >
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackRatingInput;
