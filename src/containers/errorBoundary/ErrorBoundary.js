import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch ( error, errorInfo ) {
    this.setState({ hasError: true });

  }

  render () {
    return this.state.hasError ?
      (<h1>Ooooooops...</h1>):
      this.props.children;
  }
}

export default ErrorBoundary;
