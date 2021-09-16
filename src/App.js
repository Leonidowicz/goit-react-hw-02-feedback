import { Component } from 'react';
import './App.scss';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.js';
import Statistics from './Components/Statistics/Statistics.js';
import Notification from './Components/Notification/Notification.js';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0 };

  handelIncrement = ({ target: { name } }) => {
    this.setState({ [name]: this.state[name] + 1 });
    this.setState((prevState) => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const percent = Math.round((good / total) * 100);
    return (
      <div className="App">
        <Section className="App-header" title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelIncrement}
          />
          {good + neutral + bad === 0 ? (
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
