import React from 'react';
import CounterButton from "../counter/CounterButton";

class Header extends React.Component {
  shouldComponentUpdate ( nextProps, nextState ) {
    return false;
  }

  render () {
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={ 'red' }/>
      </div>
    );
  }
}

export default Header;
