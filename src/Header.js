import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><FlatButton label="Cat Vote" className="btn" secondary={true}/></Link>
      <Link to="/results" className="resultsLink"><FlatButton label="Vote Results" className="btn" primary={true}/></Link>
      <Link to="/favorites" className="resultsLink"><FlatButton label="Favorites" className="btn" primary={true}/></Link>
    </header>
  );
};

export default Header;
