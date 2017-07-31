import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Paper style={style}>
          <img src='' alt=''/>
          <div>
            button
          </div>
        </Paper>
      </div>
    );
  }
}

const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const mapStateToProps = (state) => {
  return {
    // state
  };
};

export default connect()(Home);
