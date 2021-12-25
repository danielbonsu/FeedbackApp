import {
  React,
  createContext,
  useState,
} from "react";

export const FeedbackContext = createContext();

export const FeedbackDistributor = ({
  children,
}) => {
  const [feedbackData, setFeedbackData] =
    useState([
      {
        id: 1,
        msg: "this is a test message",
        rating: 2,
      },
    ]);

  const randy = (num) => {
    return Math.floor(Math.random() * num);
  };

  const addFeedback = (feedback) => {
    console.log(feedback);
    feedback.id = randy(1000);
    setFeedbackData([...feedbackData, feedback]);
  };

  const deleteFeedback = (feedback) => {
    setFeedbackData(
      feedbackData.filter(
        (item) => item.id !== feedback.id
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackDistributor;
