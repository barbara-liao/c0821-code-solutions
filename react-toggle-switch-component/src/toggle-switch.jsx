import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn === true) {
      this.setState({ isOn: false });
    } else if (this.state.isOn === false) {
      this.setState({ isOn: true });
    }
  }

  render() {
    if (this.state.isOn === true) {
      return (
        <button>
          <div onClick={this.handleClick} className="oval-on"></div>
          <div onClick={this.handleClick} className="circle-on"></div>
          <div className="text">On</div>
        </button>
      );
    } else if (this.state.isOn === false) {
      return (
        <button>
          <div onClick={this.handleClick} className="oval-off"></div>
          <div onClick={this.handleClick} className="circle-off"></div>
          <div className="text">Off</div>
        </button>
      );
    }
  }
}
