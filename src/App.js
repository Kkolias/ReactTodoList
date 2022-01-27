import './App.css';
import React, { Component } from 'react';
//import AddTask from './components/addTask';
//import Task from './components/Task';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task : '',
      input: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      task: this.state.input
    });
    console.log(this.state.input)
    console.log(this.state.task)
  }

  render() {
    return(
      <div className="App">
      <div className='container'>
        <h2>Todo List</h2>
        <div className='add-task-container'>
          <div className='add-task'>
          {/* <AddTask/>*/ } 
          <input onKeyUp={this.handleSubmit} placeholder='Add Task'></input>
          </div>
          <button onClick={this.handleClick}>+</button>
        </div>
        <div className='todos-container'>
          
          <ul>
            <li>{this.state.task}</li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default App;




