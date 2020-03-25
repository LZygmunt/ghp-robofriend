import React from 'react';
import { connect } from "react-redux";
import { setSearchField } from "../../store/actions/searchAction";
import { requestRobots } from "../../store/actions/requestAction";

import './App.css';
import HomePage from "../../components/home/HomePage";

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

const App = (props) => (<HomePage { ...props }/>);

export default connect( mapStateToProps, mapDispatchToProps )( App );
