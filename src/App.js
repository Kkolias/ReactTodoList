import './App.css';
//import { useState } from 'react';
import React, { Component } from 'react';
import Display from './components/Display';



const Test = (props) => {
  return (
  <div>
    <h1>{props.nimi}</h1>
  </div>
  );
}


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      nimi : "",
      input: "",
      items: []
    }
    this.handlaaMuutos=this.handlaaMuutos.bind(this);
    this.addText=this.addText.bind(this);
  }
  componentDidMount() {
    this.setState({
      nimi: "Add Task v1"
    })
  }
  handlaaMuutos = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  addText = () => {
    this.setState(previousState => ({
      items: [...previousState.items, this.state.input]
    }));
   
  }

  render() {
    const listItems = this.state.items.map((item) =>
      <li>{item}</li>
    );
    return (
      <div className='App'>
        
        <Test nimi={this.state.nimi}/>

        <div class="container">
          <input type="text" placeholder="Lisää tekstiä" onChange={this.handlaaMuutos}></input>
          <button onClick={this.addText}>Lisää</button>
          <div>
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



