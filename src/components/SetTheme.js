import './SetTheme.css';
import React from 'react';

const changeTheme = (props) => {
    document.querySelector('.slider').classList.toggle("dark-theme-enabled");
    document.querySelector('.App').classList.toggle("dark-theme");
    
}

const SetTheme = (props) => {
  return <div className='theme-container'onClick={() => changeTheme(props)}>
      <div className='slider' ><div className='theme-icon'>🌕</div></div>
  </div>;
}

export default SetTheme;

