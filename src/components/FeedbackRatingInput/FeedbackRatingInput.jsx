import {
  React,
  useState,
  useContext,
  useEffect,
} from "react";
import "./FeedbackRatingInput.css";
import { FeedbackContext } from "../../Context";

const FeedbackRatingInput = ({
  setRatingMsg,
}) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const sendFeedback = () => {
    setRatingMsg(text);
    setText("");
  };

  const { feedbackData } = useContext(
    FeedbackContext
  );

  useEffect(() => {
    // pull on the obj with property edit:true
    const bb = feedbackData.find(
      (item) => item.edit
    );

    bb && setText(bb.msg);
  }, [feedbackData]);

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
