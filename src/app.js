import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import Home from './Home';
import Header from './Header';
import Results from './Results';
import Favorites from './Favorites';

const App = () => {
  injectTapEventPlugin();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider>
          <div className='app'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/results' component={Results} />
            <Route path='/favorites' component={Favorites} />
          </div>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
