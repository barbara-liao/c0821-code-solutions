import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('email: ', this.state.value);
  }

  render() {
    return (
    <>
    <form onSubmit={this.handleSubmit}>
      <label>Email</label>
      <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      <button>Sign Up</button>
    </form>
    </>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
