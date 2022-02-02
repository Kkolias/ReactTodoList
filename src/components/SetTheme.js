import './SetTheme.css';
//import React from 'react';
import React, { Component } from 'react';


/*
const SetTheme = (props) => {
  return <div className='theme-container'onClick={() => changeTheme(props)}>
      <div className='slider' ><div className='theme-icon'>🌕</div></div>
  </div>;
}

export default SetTheme;
*/


export class SetTheme extends Component {
  
  

  changeTheme = (props) => {
    document.querySelector('.slider').classList.toggle("dark-theme-enabled");
    document.querySelector('.App').classList.toggle("dark-theme");
    
}
  render() {
    return (
      <div className='theme-container'onClick={this.props.changeTheme}>
      <div className='slider' ><div className='theme-icon'>🌕</div></div>
      
      </div>
      
    );
  }
}

export default SetTheme;
