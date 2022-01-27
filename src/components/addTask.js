import React, { Component } from 'react';
import './addTask.css';

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task : '',
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.setState({
      input: event.target.value
    });
    
  }
  
  render() {
    return <div>
        <input onKeyUp={this.handleSubmit} placeholder='Add Task'></input>
    </div>;
  }
}

export default AddTask;
