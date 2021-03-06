import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }
  changeHandler = (event) => {
    this.setState({tweet: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          onChange={this.changeHandler}
          value={this.state.tweet}/>
          <p>{this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
