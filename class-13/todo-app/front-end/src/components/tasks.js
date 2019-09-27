import React from 'react';
import superagent from 'superagent';
import Task from './task.js';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    return superagent.get(`${process.env.REACT_APP_API_URL}/tasks`)
      .then(tasks => {
        this.setState({
          tasks: this.props.newTask ? tasks.body.concat(this.props.newTask).reverse() : tasks.body.reverse()
        })
      })
      .catch('error')
  }

  render() {
    return (
      <React.Fragment>
        <ul className="task-list">
          {this.state.tasks.map((task, idx) => {
            return (
              <Task key={idx} details={task} />
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Tasks;