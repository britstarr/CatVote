import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {getVotedCats} from '../redux/actionCreators';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (this.props.votedData.data
      ? <div className="container">
          <h1>Vote Results</h1>
          {Array.from(this.props.votedData.data).map((vote, i) => {
            const data = vote.split('\n');
            const url = data[2].match(/(\>(.*)\<)/)[2];
            const rating = data[4].match(/(\>(.*)\<)/)[2];
            return (
              <Paper className="catDisplay votedDisplay" key={`votedcat${i}`}>
                <img src={url} alt='image of cat voted' className='votedCatImg'/>
                <p className="showRating">You rated this a {rating}</p>
                {vote.rating}
              </Paper>
            );
          })}
        </div>
      : <div className="container">
          {this.props.dispatch(getVotedCats())}
          <h1>Vote Results</h1>
          <p>You haven't voted on any cats yet! Go to the homepage and judge some furballs!</p>
        </div>);
  }
}

const mapStateToProps = (state) => {
  return {votedData: state.votedData};
};

export default connect(mapStateToProps)(Results);
