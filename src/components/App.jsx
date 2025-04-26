import './App.css';
import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';
import Notification from './Notification';
import { useEffect, useState } from 'react';

function App() {

  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });
  
  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);
  
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks))
  }, [clicks]);
  
  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} onReset={resetFeedback} total={totalFeedback}/>
      {totalFeedback > 0 ? (<Feedback clicks={clicks} total={totalFeedback} positive={positiveFeedback} />) : (<Notification message="No feedback yet"/>)}
    </>
  )
}

export default App
