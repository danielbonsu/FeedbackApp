import {
  React,
  createContext,
  useState,
  useEffect,
} from "react";

export const FeedbackContext = createContext();

export const FeedbackDistributor = ({
  children,
}) => {
  const [feedbackData, setFeedbackData] =
    useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const dd = await fetch(
      "http://localhost:5000/feedbacks"
    );
    const results = await dd.json();
    setFeedbackData(results);
  };

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

  const editFeedback = (feedback) => {
    // remove edit property from all items first
    const dd = [];

    feedbackData.forEach((item) => {
      delete item.edit;
      dd.push(item);
    });
    console.log(dd, 6666);
    // find the item to be edited
    let itemTobeEdited = feedbackData.find(
      (item) => item.id === feedback.id
    );
    itemTobeEdited.edit = true;
    const newArr = feedbackData.filter(
      (item) => item.id !== feedback.id
    );
    setFeedbackData([...newArr, itemTobeEdited]);
    console.log(feedbackData);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        addFeedback,
        deleteFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackDistributor;
