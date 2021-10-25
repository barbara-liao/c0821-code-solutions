import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemViewed: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const key = event.target.id;
    if (event.target.nodeName === 'H3') {
      if (this.state.itemViewed === key) {
        this.setState({
          itemViewed: null
        });
      } else {
        this.setState({
          itemViewed: key
        });
      }
    }

  }

  render() {
    const topics = this.props.topics;
    const listTopics = topics.map(topic =>
      <li key={topic.topic}>
        <h3 onClick={this.handleClick} id={topic.topic} className="header">{topic.topic}</h3>
        <p className={this.state.itemViewed === topic.topic ? 'detail' : 'detail hidden'}>{topic.detail}</p>
      </li>
    );
    return (
        <ul>
          {listTopics}
        </ul>
    );
  }
}
