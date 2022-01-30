import './App.css';
//import { useState } from 'react';
import React, { Component } from 'react';






const TaskList = (props) => {
  return (
    <div className='task-container'>
      {props.itemit}
      
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
    this.addTextOnEnter=this.addTextOnEnter.bind(this);
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
    if (this.state.input !== "") {
      this.setState(previousState => ({
      items: [...previousState.items, this.state.input]
    }));
    this.setState({input: ""})
    }
    
  }
  addTextOnEnter = (e) => {
    console.log("asd")
    if (e.keyCode === 13) {
      this.addText()
    }
  }
  
  render() {
    const listItems = this.state.items.map((item) => 
      <div className='task'>{item}</div>
    );
    
    
    return (
      <div className='App'>
        <h2>Task List</h2>

        

        <div class="container">
          <input value={this.state.input} type="text" placeholder="Lisää tekstiä" onKeyDown={this.addTextOnEnter} onChange={this.handlaaMuutos}></input>
          <button onClick={this.addText}>Lisää</button>
          <div>
            <TaskList itemit={listItems}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



