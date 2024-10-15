import Description from "./Description/Description";
import Options from "./Options/Options";
import React, { useState, useEffect } from "react";
import Feedback from "./FeedBack/FeedBack";
import Notification from "./Notification/Notification";


const App = () => {

  
  const [feedback, setFeedback] = useState(() => {

    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
  }});

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  


  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)



  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
    <Description/>
    <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
    />
    
    {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />)
          :  (
          <Feedback 
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
    />)}
    </>
  );
};


export default App;