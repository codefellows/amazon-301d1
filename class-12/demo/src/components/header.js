import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/things">List of Things</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
