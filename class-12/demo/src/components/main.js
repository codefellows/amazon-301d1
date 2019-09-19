import React from 'react';
import { Route } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let things = ['pencil', 'hat', 'beans', 'corn', 'guitar', 'backpack', 'taco'];
  let items = things.map((item, i) => <li key={i}>{item}</li>);

  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/things" render={() => <List>{items}</List>} />
    </main>
  );
};

export default Main;
