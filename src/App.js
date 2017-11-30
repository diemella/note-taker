import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NoteForm from './components/noteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Note Taker</h1>
        <NoteForm />
      </div>
    );
  }
}

export default App;
