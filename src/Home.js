import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import key from '../_priv.js';
import { getRandomCats, addCatVote } from '../redux/actionCreators';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  componentWillMount() {
    for (let i = 1; i <= 21; i++) {
      this.setState({
        [`value${i}`]: 0
      });
    }

    this.props.dispatch(getRandomCats());
  }

  handleRating(cardData, event, rating) {
    const rateCard = `value${cardData.id}`;
    this.setState({
      [rateCard]: rating+1
    });
    /*
      cardData = {
        id: image in the array,
        image: "<a target="_blank" href="http://thecatapi.com/?id=MTgzOTAwMg"><img src="http://24.media.tumblr.com/tumblr_m39dmyBqTt1rot6ajo1_500.jpg"></a>"
      }
    */
  }

  render() {
    return (
      this.props.catData.data
        ?
        <div className="container">
          {this.props.catData.data.map((image, i) => {
            console.log(`this.state.value${i+1}`)
              return <Paper className="catDisplay" key={`cat${i}`}>
                <div src='' alt='image of cat' className='catImg' dangerouslySetInnerHTML={{
                  __html: image
                }}></div>
                <div className="rate" key={`rate${i}`}>
                  <h4>Rate This Cat</h4>
                  <p>{this.state.rating > 0
                      ? this.state.rating
                      : null}</p>
                  <SelectField className="rateOptions" maxHeight={100} value={`this.state.value${i+1}`}  onChange={this.handleRating.bind(this, {id: i+1, image})}>
                    <MenuItem value={1} primaryText="1" key={`vote1${i}`}/>
                    <MenuItem value={2} primaryText="2" key={`vote2${i}`}/>
                    <MenuItem value={3} primaryText="3" key={`vote3${i}`}/>
                    <MenuItem value={4} primaryText="4" key={`vote4${i}`}/>
                    <MenuItem value={5} primaryText="5" key={`vote5${i}`}/>
                    <MenuItem value={6} primaryText="6" key={`vote6${i}`}/>
                    <MenuItem value={7} primaryText="7" key={`vote7${i}`}/>
                    <MenuItem value={8} primaryText="8" key={`vote8${i}`}/>
                    <MenuItem value={9} primaryText="9" key={`vote9${i}`}/>
                    <MenuItem value={10} primaryText="10" key={`vote10${i}`}/>
                  </SelectField>
                </div>
                <div className="fave" key={`fave{i}`}>
                  <RaisedButton label="Favorite" secondary={true} className="faveBtn"/>
                </div>
              </Paper>
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
