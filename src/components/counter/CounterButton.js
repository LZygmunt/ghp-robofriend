import React, { Component } from 'react';

class CounterButton extends Component {
  state = {
    count: 0
  };

  shouldComponentUpdate ( nextProps, nextState ) {
    return this.state.count !== nextState.count;
  };

  updateCount = () => {
    this.setState( prevState => ({ count: prevState.count + 1 }));
  };

  render () {
    return (
      <button
        id="counter"
        color={ this.props.color }
        onClick={ this.updateCount }
      >
        Count: { this.state.count }
      </button>
    );
  }
}

export default CounterButton;
