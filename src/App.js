import './App.css';
//import { useState } from 'react';
import React, { Component } from 'react';
import SetTheme from './components/SetTheme';
//import Display from './components/Display';




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
      items: [],
      theme: "light"
    }
    this.handlaaMuutos=this.handlaaMuutos.bind(this);
    this.addText=this.addText.bind(this);
    this.addTextOnEnter=this.addTextOnEnter.bind(this);
    this.removeTask=this.removeTask.bind(this);
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
    if (e.keyCode === 13) {
      this.addText()
    }
  }
  
  removeTask = (index) => {
    
    this.state.items.splice(index, 1)
    this.setState({items: this.state.items})
    
  }
 
  render() {
    
    const listItems = this.state.items.map((item, index) => 
      <div key={index} className='task' >
        <div className='task-text'>{item}</div>
        <div className='remove-task' onClick={()=>this.removeTask(index)}>✕</div> 
      </div>

    );
    
    
    return (
      <div className='App'>
        
        
        <h2>Task List</h2>

        

        <div class="container">
          <SetTheme theme={this.state.theme}/>
          <input autoFocus value={this.state.input} type="text" placeholder="Lisää tekstiä" onKeyDown={this.addTextOnEnter} onChange={this.handlaaMuutos}></input>
          <button className='element-button' onClick={this.addText}>+</button>
          <div>
            <TaskList itemit={listItems}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



