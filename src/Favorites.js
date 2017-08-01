import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {getVotedCats} from '../redux/actionCreators';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (this.props.faveData.data
      ? <div className="container">
          <h1>Favorites</h1>
          {Array.from(this.props.faveData.data).map((vote, i) => {
            const data = vote.split('\n');
            const url = data[2].match(/(\>(.*)\<)/)[2];
            return (
              <Paper className="catDisplay votedDisplay" key={`votedcat${i}`}>
                <img src={url} alt='image of cat voted' className='faveCatImg'/>
              </Paper>
            );
          })}
        </div>
      : <div className="container">
        {this.props.dispatch(getVotedCats())}
        <h1>Favorites</h1>
        <p>You haven't set any cats as your favorites yet! Go to the homepage first and click favorite on some pictures.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {faveData: state.faveData};
};

export default connect(mapStateToProps)(Favorites);
