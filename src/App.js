import './App.css';
//import { useState } from 'react';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Paina</button>
        <div>{this.state.count}</div>
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default App;





/*
export default function App() {
  constructor(props) {
    super(props);
  }
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count +1);
  }
  return (
    <div>
      <button onClick={handleClick}>Paina</button>
      <div>{count}</div>
      <Display />
    </div>
  );
}
*/

class Display extends Component {
  
  render() {
    return (
      <div>
        <h3>class component</h3>
        <p>count: {this.props.count}</p>
      </div>
    );
  }
}

