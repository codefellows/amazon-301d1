import React from 'react';
import If from '../if/if.js';

export default props => (
  <React.Fragment>
    <ul className="list">{props.children}</ul>
    {/* If there are any child properties they will be rendered here ^ */}
    {/*  In our case props.children is 8ish <li>'s */}
    <If condition={props.children.length > 20}> 
      <div>Check out all of these things!</div>
    </If>
  </React.Fragment>
);
