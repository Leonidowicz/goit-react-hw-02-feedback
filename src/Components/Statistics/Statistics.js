import { Component } from 'react';

class Statistics extends Component {
  render() {
    let { good, neutral, bad } = this.props;
    return (
      <div>
        <h2>Statistics:</h2>
        <p>
          {['good']}:&ensp;{good}
        </p>
        <p>
          {['neutral']}:&ensp;{neutral}
        </p>
        <p>
          {['bad']}:&ensp;{bad}
        </p>
        <p>Total Feedback:&ensp;{this.props.total}</p>
        <p>
          Positive Feedback:&ensp;
          {this.props.total > 0 ? this.props.percent : 0}%
        </p>
      </div>
    );
  }
}
export default Statistics;
