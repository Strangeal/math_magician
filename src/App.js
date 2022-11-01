import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculate from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/math_magician" element={<Home />} />
          <Route path="/math_magician/calculator" element={<Calculate />} />
          <Route path="/math_magician/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
