import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import css from 'components/App.module.css';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.currentTarget;

    if (name === 'good') setGood(prevState => prevState + 1);
    else if (name === 'neutral') setNeutral(prevState => prevState + 1);
    else if (name === 'bad') setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
