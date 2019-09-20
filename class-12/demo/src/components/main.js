import React from 'react';
import { Route } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let things = ['pencil', 'hat', 'beans', 'corn', 'guitar', 'backpack', 'taco'];
  let items = things.map((item, i) => <li key={i}>{item}</li>);
  // items is an array of 7 lis like <li key=0>pencil</li>

  return (
    <main>
      <Route exact path="/" component={Home} />
      {/* When I go to "/" render the Home component */}

      <Route exact path="/things" render={() => <List>{items}</List>} />
      {/* <List> will reference props.children because of {items} */}
      {/* if you have an <ul> component, its <li>'s could be props.children */}
    </main>
  );
};

export default Main;
