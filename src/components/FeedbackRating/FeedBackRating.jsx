import {
  React,
  useState,
  useContext,
  useEffect,
} from "react";
import "./FeedbackRating.css";
import { FeedbackContext } from "../../Context";
import FeedBackCard from "../FeedbackCard/FeedBackCard";
import FeedbackRatingInput from "../FeedbackRatingInput/FeedbackRatingInput";

const FeedBackRating = () => {
  const [rated, setRated] = useState("1");
  const [ratingMsg, setRatingMsg] = useState("");

  const { addFeedback } = useContext(
    FeedbackContext
  );

  const sendFeedback = () => {
    if (!rated || ratingMsg === "") {
      console.log("masa masa");
    } else {
      addFeedback({
        rating: rated,
        msg: ratingMsg,
      });

      setRated("1");
    }
  };

  useEffect(() => {
    sendFeedback();
  }, [rated, ratingMsg]);

  return (
    <div className='ratingSelectContainer'>
      <h2>Please Rate us</h2>
      <div className='ratingselect'>
        {[...Array(10).keys()].map((item) => (
          <div
            onClick={(e) =>
              setRated(e.target.innerText)
            }
            className={
              rated === String(item + 1)
                ? "classRateItem highlight"
                : "classRateItem"
            }
          >
            <span>{item + 1}</span>
          </div>
        ))}
      </div>
      <FeedbackRatingInput
        setRatingMsg={setRatingMsg}
      />
      <FeedBackCard />
    </div>
  );
};

export default FeedBackRating;
