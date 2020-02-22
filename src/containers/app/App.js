import React from 'react';
import { connect } from "react-redux";
import CardList from "../../components/card/CardList";
import SearchBox from "../../components/header/SearchBox";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Scroll from "../../components/scroll/Scroll";
import { setSearchField } from "../../store/actions/searchAction";
import { requestRobots } from "../../store/actions/requestAction";

import './App.css';
import Header from "../../components/header/Header";

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  handleChange: evt => dispatch( setSearchField( evt.target.value )),
  requestRobots: () => dispatch( requestRobots())
});

class App extends React.Component {
  componentDidMount = async () => {
    this.props.requestRobots();
  };

    render () {
    let {
      searchField,
      handleChange,
      robots,
      isPending,
      error
    } = this.props;
    const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes( searchField.toLowerCase()));

    return (
      <div className="App tc">
        <Header/>
        <SearchBox searchField={ searchField } handleChange={ handleChange }/>
        <Scroll>
          { isPending ? <h1>Loadnig...</h1> : (
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/>
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
