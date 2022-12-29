import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './Notification/Notification';


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = (event) => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1
    }));
  };

  countTotalFeedback = () => {
  return Math.round(this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
  return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

    render() {
      const { good, neutral, bad } = this.state;
      
      return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
          ) : (
              <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;