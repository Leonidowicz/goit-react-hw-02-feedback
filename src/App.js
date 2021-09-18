import { Component } from 'react';
import './App.scss';
import { Section } from './Components/Section/Section';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions.js';
import { Statistics } from './Components/Statistics/Statistics.js';
import { Notification } from './Components/Notification/Notification.js';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handelIncrement = ({ target: { name } }) => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total = this.countTotalFeedback()) =>
    Math.round((this.state.good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <Section className="App-header" title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelIncrement}
          />
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
