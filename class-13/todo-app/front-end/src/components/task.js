import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li>
          <p>
            <span>task!</span>
            <span>{ this.props.details.name }</span>
          </p>
          <p>
            <span>details...</span>
            <span>{ this.props.details.desc }</span>
          </p>
        </li>
      </React.Fragment>
    );
  }
}

export default Task;