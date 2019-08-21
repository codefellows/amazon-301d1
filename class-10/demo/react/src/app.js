import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Word Reverser - React!</h1>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'nothing to see here',
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
    console.log(this.state);
  };

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');
    this.setState({ words });
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
