import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackTypes = { good, neutral, bad };

  const leaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Math.round(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackTypes)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
