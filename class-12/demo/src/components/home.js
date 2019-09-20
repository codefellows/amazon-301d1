import React from 'react';

/* 
  The industry is at a point where ES6 is standard
  React is a framework, that because of when it was adopted, it is ES6 driven

  React redux is a thing, its tough but does a great job
  the new big thing is hooks, its awesome, built into the base React

  Despite this, it all uses vanilla and is syntax sugar
*/

export default props => <h2>Home Page</h2>;

// Really awesome pattern ^
// export a default function that has a parameter "props" and a return of an <h2> tag

// export default props => {
//   <h2>Home page</h2>
//   // ***^^^ This will not work, it does not implicitly return the <h2>
//   // we would need to return the <h2>
//   return <h2>Home Page </h2>
// }

// export default function(props){
//   return (
//     <h2>Home Page</h2>
//   )
// }
