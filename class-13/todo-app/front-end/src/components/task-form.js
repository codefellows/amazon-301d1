import React from 'react';
import superagent from 'superagent';
import Tasks from './tasks.js';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskAdded: false,
      task: []
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      taskAdded: false
    })

    let formData = {
      name: e.target.name.value,
      desc: e.target.desc.value
    }

    e.target.reset();

    superagent.post(`${process.env.REACT_APP_API_URL}/task`)
      .send(formData)
      .then(result => {
        this.setState({
          taskAdded: true,
          task: result.body
        })
      })
      .catch('task not added');
  }

  render() {
    return (
      <main className="task-app">
        <h1>tasks!</h1>

        <form className="task-form" onSubmit={this.handleSubmit}>
          <input type='text' name='name' placeholder='enter task name' />
          <textarea name='desc' placeholder='enter a description'></textarea>
          <button type='submit'>add task</button>
        </form>

        {this.state.taskAdded ?
          <Tasks newTask={null} /> :

          <React.Fragment>
            <Tasks newTask={this.state.task} />
          </React.Fragment>
        }

        <footer></footer>
      </main>
    )
  }
}

export default TaskForm;