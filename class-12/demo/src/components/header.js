import React from 'react';

import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
            { /* Think of a Link as an anchor tag <a></a>/ */}
            {/* The Link ties its behavior directly to the BrowserRouter */}
            {/* , which also came from 'react-router-dom', */}
            {/* Rather than having the behavior of actually changing pages */}
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
