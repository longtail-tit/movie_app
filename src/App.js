import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
    {/* 모든 영화 내용, 정보가 들어갈 곳 */}
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      </div>
    );
  }
}

export default App