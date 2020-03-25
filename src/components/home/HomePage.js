import React, { Component } from 'react';
import CardList from "../../components/card/CardList";
import SearchBox from "../../components/header/SearchBox";
import ErrorBoundary from "../../containers/errorBoundary/ErrorBoundary";
import Scroll from "../../components/scroll/Scroll";
import Header from "../../components/header/Header";

class HomePage extends Component {
  componentDidMount = async () => {
    this.props.requestRobots();
  };

  filteredRobots =
      robots => robots.filter(
        robot => robot.name.toLowerCase().includes( this.props.searchField.toLowerCase()));

  render () {
    let {
      searchField,
      handleChange,
      robots,
      isPending,
      error
    } = this.props;

    return (
      <div className="App tc">
        <Header/>
        <SearchBox searchField={ searchField } handleChange={ handleChange }/>
        <Scroll>
          { isPending ? <h1>Loadnig...</h1> : (
            <ErrorBoundary>
              <CardList robots={ this.filteredRobots( robots ) }/>
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default HomePage;
