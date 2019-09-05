import React from 'react';
import Form from './form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleForm = (results) => {
    this.setState({ results });
  };

  render() {
    return (
      <React.Fragment>
        <Form prompt="Click for Star Wars Peeps!" handler={this.handleForm} />
        <ul>
          {Object.keys(this.state.results).map((key, idx) => {
            return (
              <li key={idx}>
                <a href={this.state.results[key]}>{key}</a>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
