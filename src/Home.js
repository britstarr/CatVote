import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      slider: 0
    }

    this.handleSlider = this.handleSlider.bind(this);
  }


  handleSlider(event, value) {
    this.setState({
      slider: value
    });
  }

  render() {
    return (
      <div className="container">
        <Paper className="catDisplay">
          <img src="" alt="image of cat"/>
          <div className="rate">
            <h4>Rate This Cat</h4>
            <p>{this.state.slider > 0 ? this.state.slider : null}</p>
            <Slider
              step={1}
              value={0}
              max={10}
              onChange={this.handleSlider}
              className="rateSlider"
            />
          </div>
          <div className="fave">
            <RaisedButton label="Favorite" secondary={true} className="faveBtn" />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state
  };
};

export default connect()(Home);
