import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timer: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.setState({
        timerOn: true,
        timer: this.state.timer + 1
      }),
      1000
    );
  }

  stopTimer() {
    this.setState({
      timerOn: false
    });
    clearInterval(this.timerID);
  }

  handleClick() {
    if (!this.state.timerOn) {
      this.startTimer();
    } else if (this.state.timerOn) {
      this.stopTimer();
    }
  }

  handleReset() {
    if (!this.state.timerOn) {
      this.setState({
        timer: 0
      });
    }
  }

  getIcon() {
    if (!this.state.timerOn) return <i className="fas fa-play"></i>;
    if (this.state.timerOn) return <i className="fas fa-pause"></i>;
  }

  render() {
    const time = this.state.timer;
    const icon = this.getIcon();
    return (
      <div>
        <button>
          <div onClick={this.handleReset} className="face"></div>
          <div className="time">{time}</div>
        </button>
        <button onClick={this.handleClick} className="startPause">{icon}</button>
      </div>
    );
  }
}
