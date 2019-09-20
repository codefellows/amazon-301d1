import React from 'react';


export default props => {
  return props.condition ? props.children : null;
  // This ^^^ Is a cool pattern to practice
  // This is a ternary operator
  /* same as if(props.condition){
    return props.children;
  } else {
    return null;
  }
  
  */
};
