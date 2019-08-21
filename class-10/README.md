![cf](http://i.imgur.com/7v5ASc8.png) Component Based UI
========================================================

## Overview
Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on similar architectural principles.

* Rather than view an application as an enourmous interconnected codebase, the application is a **composition** of `components` that work together to make the application work.
* The secret sauce is how they work together.
* We use Classes and Functions to classify functionality
* We require what we need
* We render it where we want
* We pay attention to `state` and react as it changes.

## Learning Objectives
**Students will be able to ...**
* Describe in their own terms "component architecture"
* Describe in their own terms "application and component state"
* Begin a React project locally with `create-react-app`
* Create and render `Class` and `Functional` React components to the DOM
* Add event listeners to React components
* Update React component state

### React
**We will be using React in this course to learn the basic principles of user interface components and application state management**

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

* JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
Behind the scenes...
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
