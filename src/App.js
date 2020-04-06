import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'

class App extends Component {

  state = {
    userInput: ''
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (event) => {
      const text = this.state.userInput.split('');
      text.splice(event,1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText});
  };


  render() {
      const charList = this.state.userInput.split('').map((ch, index) => {
          return <Char
              character={ch}
              key={index}
              clicked={() => this.deleteCharHandler(index)}
          />;
      });

    return (
      <div className="App">
        <input
            type={"text"}
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
