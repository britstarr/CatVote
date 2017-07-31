import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

class Results extends Component {
  render() {
    return (
      <div className="container">
        <h1>Vote Results</h1>
        <Paper className="catDisplay" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // state
  };
};

export default connect()(Results);
