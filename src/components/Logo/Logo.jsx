import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerlogo} alt="Logo" />
    </div>
  );
};

export default Logo;
