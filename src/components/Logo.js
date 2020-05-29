import React from 'react';
import logo from '../images/logo.svg';
import classNames from 'classnames';
import styles from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className="container">
        <img src={logo} alt="Base Apparel logo" />
      </div>
    </div>
  );
};

export default Logo;
