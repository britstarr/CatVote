import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div className="container">
        <h1>Results Page</h1>
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
