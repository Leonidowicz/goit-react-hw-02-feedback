import { Component } from 'react';
import _ from 'lodash';
import './App.scss';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.js';
import Statistics from './Components/Statistics/Statistics.js';
import Notification from './Components/Notification/Notification.js';

class App extends Component {
  state = {};
  handelIncrement = ({ target: { name } }) => {
    this.state[name]
      ? this.setState({ [name]: this.state[name] + 1 })
      : this.setState({ [name]: 1 });
  };

  countTotalFeedback = ({ good = 0, neutral = 0, bad = 0 } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good } = this.state,total = this.countTotalFeedback()) => Math.round((good / total) * 100);

  render() {
    const { good = 0, neutral = 0, bad = 0 } = this.state;

    return (
      <div className="App">
        <Section className="App-header" title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelIncrement}
          ></FeedbackOptions>
          {_.isEmpty(this.state) ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
