import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import key from '../_priv.js';
import { getRandomCats, addCatVote, getVotedCats, getFaveData, addFave } from '../redux/actionCreators';

class Home extends Component {
  constructor(props) {
    super(props);

    this.validateForm = this.validateForm.bind(this);
  }

  componentWillMount() {
    if (!this.props.catData.data) {
      this.props.dispatch(getRandomCats());
      // dispatching these two here just to make up for the slowness of using the proxy to load data
      this.props.dispatch(getVotedCats());
      this.props.dispatch(getFaveData());
    }
  }

  validateForm(voteData, event) {
    event.preventDefault();
    const index = `rating${voteData.i}`;
    const enteredRating = parseInt(this.refs[index].value);
    // match on string to get imageID
    const imgID = voteData.image.match(/id\=(.*)\"></)[1].match(/.+?(?=")/)[0];

    if (!Number.isInteger(enteredRating) || enteredRating < 1 || enteredRating > 10) {
      alert('Please enter a rating between 1 and 10!')
    } else {
      this.props.dispatch(addCatVote(imgID, enteredRating));
      alert(`You rated this one a ${enteredRating}`)
    }
  }

  faveCat(selectedImage) {
    const imgID = selectedImage.match(/id\=(.*)\"></)[1].match(/.+?(?=")/)[0];
    this.props.dispatch(addFave(imgID));
    alert('Added to favorites');
  }

  render() {
    return (
      this.props.catData.data
        ?
        <div className="container">
          {this.props.catData.data.map((image, i) => {
            return image.length > 0 ?
              <Paper className="catDisplay" key={`cat${i}`}>
                <div src='' alt='image of cat' className='catImg' dangerouslySetInnerHTML={{
                  __html: image
                }}></div>
                <div className="rate" key={`rate${i}`}>
                  <form onSubmit={this.validateForm.bind(this, {image, i})}>
                    <h4>Rate This Cat</h4>
                    <label htmlFor='rating'>Please enter a rating between 1 and 10</label><br />
                    <input type="text" name="rating" className="rating" ref={`rating${i}`}/>
                  </form>
                </div>
                <div className="fave" key={`fave{i}`}>
                  <RaisedButton label="Favorite" secondary={true} className="faveBtn" onClick={this.faveCat.bind(this, image)}/>
                </div>
              </Paper>
              : null
            })}
        </div>
        :
        <div className="container">
          <h1>Loading furry friends...please wait</h1>
          {this.props.dispatch(getRandomCats())}
        </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {catData: state.catData};
};

export default connect(mapStateToProps)(Home);
