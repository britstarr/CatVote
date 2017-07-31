import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><FlatButton label="Cat Vote" /></Link>
      <Link to="/results" className="resultsLink"><FlatButton label="Results" /></Link>
    </header>
  );
};

export default Header;
