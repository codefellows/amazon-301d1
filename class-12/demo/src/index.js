import React from 'react';
import ReactDOM from 'react-dom';

// This is the same as the import below
import { BrowserRouter } from 'react-router-dom';

// // This is the same as the import above
// import ReactRouterDom from 'react-router-dom';
// const BrowserRouter = ReactRouterDom.BrowserRouter;

import App from './components/app.js';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
