import React from 'react';
import TaskForm from './task-form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <TaskForm />
      </React.Fragment>
    );
  }
}

export default App;