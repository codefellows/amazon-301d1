import React from 'react';
import If from '../if/if.js';

export default props => (
  <React.Fragment>
    <ul className="list">{props.children}</ul>
    <If condition={props.children.length > 5}>
      <div>Check out all of these things!</div>
    </If>
  </React.Fragment>
);
