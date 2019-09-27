import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import dotenv from 'dotenv';

import './scss/core.scss';

dotenv.config();

class Entry extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Entry />, rootElement);