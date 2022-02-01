import './SetTheme.css';
import React from 'react';

const changeTheme = () => {
    document.querySelector('.slider').classList.toggle("dark-theme-enabled");
    document.querySelector('.App').classList.toggle("dark-theme");
    
    
}

const SetTheme = () => {
  return <div className='theme-container'onClick={changeTheme}>
      <div className='slider' ><div className='theme-icon'>🌕</div></div>
  </div>;
}

export default SetTheme;

