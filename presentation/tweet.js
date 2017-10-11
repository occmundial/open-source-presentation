import React from "react";
const Tweet = React.createClass({
  componentDidMount() {
    // window.twttr.widgets.load();
  },

  render() {
    return (
      <blockquote className="twitter-tweet">{this.props.children}</blockquote>
    );
  }
});
export default Tweet;