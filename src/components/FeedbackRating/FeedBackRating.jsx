import { React, useState } from "react";
import "./FeedbackRating.css";
import FeedBackCard from "../FeedbackCard/FeedBackCard";
import FeedbackRatingInput from "../FeedbackRatingInput/FeedbackRatingInput";

const FeedBackRating = () => {
  const [rated, setRated] = useState("");

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
      <FeedbackRatingInput />
      <FeedBackCard />
    </div>
  );
};

export default FeedBackRating;
