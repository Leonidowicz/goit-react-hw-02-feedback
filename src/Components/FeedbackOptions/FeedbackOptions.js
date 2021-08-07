// import { tsImportEqualsDeclaration } from "@babel/types"
import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className="buttons">
        {this.props.options.map((elem) => (
          <button
            onClick={(e) => this.props.onLeaveFeedback(e)}
            name={elem}
            type="button"
          >
            {elem}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
