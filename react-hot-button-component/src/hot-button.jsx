import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks <= 3) {
      return (
        <button onClick={this.handleClick} className="cold">
          Hot Button
        </button>
      );
    } else if (this.state.clicks <= 6) {
      return (
        <button onClick={this.handleClick} className="cool">
          Hot Button
        </button>
      );
    } else if (this.state.clicks <= 9) {
      return (
        <button onClick={this.handleClick} className="room">
          Hot Button
        </button>
      );
    } else if (this.state.clicks <= 12) {
      return (
        <button onClick={this.handleClick} className="warm">
          Hot Button
        </button>
      );
    } else if (this.state.clicks <= 15) {
      return (
        <button onClick={this.handleClick} className="hot">
          Hot Button
        </button>
      );
    } else if (this.state.clicks <= 18 || this.state.clicks > 18) {
      return (
        <button onClick={this.handleClick} className="inferno">
          Hot Button
        </button>
      );
    }
  }
}
