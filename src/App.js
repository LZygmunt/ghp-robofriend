import React from 'react';
import CardList from "./components/card/CardList";
import SearchBox from "./components/header/SearchBox";
import Scroll from "./components/Scroll";

import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  state = {
    searchField: "",
    robots: []
  };

  componentDidMount = async () => {
    let fetchData = await fetch("http://jsonplaceholder.typicode.com/users");
    fetchData = await fetchData.json();
    this.setState({ robots: fetchData });
  };

  handleChange = evt => {
    let value = evt.target.value;
    this.setState({ searchField: value });
  };

  render () {
    let { robots, searchField } = this.state;
    const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes( searchField.toLowerCase()));

    return (
      <div className="App tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchField={ this.state.searchField } handleChange={ this.handleChange }/>
        <Scroll>
          { !robots.length ? <h1>Loadnig...</h1> : (
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/>
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default App;
