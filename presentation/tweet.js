import React from "react";

const Tweet = React.createClass({
  componentDidMount() {
    // window.twttr.widgets.load();
  },

  render() {
    return (
      <div>
        <blockquote className="twitter-tweet">{this.props.children}</blockquote>
      </div>
    );
  }
});
export default Tweet;
