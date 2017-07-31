import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../redux/store';
import Home from './Home';
import Header from './Header';
import Results from './Results';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider>
          <div className='app'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/results' component={Results} />
          </div>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
