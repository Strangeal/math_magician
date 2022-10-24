import React, { Component } from 'react';
import Calculate from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculate />
      </div>
    );
  }
}

export default App;
