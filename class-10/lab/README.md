# ![cf](http://i.imgur.com/7v5ASc8.png) Class 10: Simple Counter App

## Resources
- [ReactJS Hello World](https://reactjs.org/docs/hello-world.html)
- [Intro to JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

## Configuration

_Your repository must include the following config files:_
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `react` and `react-dom`
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.


```sh
counter_app (repository)
├──public
│  └── index.html
├──src
│  └── app.js
│  └── index.js
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## Overview
For this assignment, you will be creating a simple counter application that uses `this.setState` and `this.state` to update and capture the state of a displayed counter each time that a button is clicked.  For example, if the "+" button is clicked, the displayed counter will increment by 1.  If the "-" button is clicked, the counter will decrement by 1.


### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Requirements
Create the following components, all within your `app.js` file.

#### `<App>`
* Should contain your `<Counter>` component and should be wrapped in `<React.Fragment>`.  The component heirarchy should looks as follows:

```
<App>
  <Counter>
```

#### `<Counter>`
* Should contain the following state:
```
this.state = {
  count: 0,
};
```
* Should contain a `<p>` element that contains the current number of clicks against your counter.  On initialization, it should start with/display "0".
* Should contain a button that displays a "+" for incrementing the counter.  On click, the `count` property on your state should update/increment by 1 and the `<p>` element referenced above should display the result.
* Should contain a button that displays a "-" for decrementing the counter.  On click, the `count` property on your state should update/decrement by 1 and the `<p>` element referenced above should display the result.