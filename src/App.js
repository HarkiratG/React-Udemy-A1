import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validate.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    chars : ''
  }

  updateCharHandler = (event) => {
    this.setState({chars : event.target.value});
  }

  deleteCharHandler = (idx) => {
    let newChars = this.state.chars.split('');

    newChars.splice(idx, 1);
    {console.log(newChars)}
    this.setState({chars: newChars.join('')});
  }

  render() {
    let comp1 = (
      <div>
        <p>  <input
              type        ="text"
              value       ={this.state.chars}
              onChange    ={this.updateCharHandler}/>
        </p>
      </div>
    );

    let showCharComponents = (
      <div>
      {this.state.chars.split('').map((each_char, idx) => {
        return <CharComponent
          key     = {each_char + idx}
          char    = {each_char}
          delete  = {() => this.deleteCharHandler(idx)}/>
      })}
      </div>
    );


    return (
      <div className="App">
        {comp1}
        <p> Entered length is {this.state.chars.length} </p>
        <Validation
          length = {this.state.chars.length} />
          <hr/>
        {showCharComponents}
      </div>

    );
  }
}

export default App;
