import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';

import arrow from '../images/icon-arrow.svg';
import errorIcon from '../images/icon-error.svg';

const Details = () => {
  const [customStyles, setCustomStyles] = useState({
    errorDisplay: 'none',
    errorIconDisplay: 'none',
    borderColor: 'hsl(0, 36%, 70%)',
  });

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      setCustomStyles({
        errorDisplay: 'none',
        errorIconDisplay: 'none',
        borderColor: 'hsl(0, 36%, 70%)',
      });
    } else {
      setCustomStyles({
        errorDisplay: 'block',
        errorIconDisplay: 'block',
        borderColor: 'hsl(0, 93%, 68%)',
      });
    }
  };

  return (
    <div className={classNames('container', styles.details)}>
      <h1 className={styles.title}>
        <span className={styles.firstWord}>We're </span>Coming Soon
      </h1>
      <p className={styles.text}>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form className={classNames('container', styles.form)}>
        <input
          className={styles.input}
          style={{ borderColor: customStyles.borderColor }}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
        />
        <a className={styles.arrow} onClick={handleSubmit}>
          <img src={arrow} />
        </a>
        <img
          src={errorIcon}
          alt="error icon"
          className={styles.errorIcon}
          style={{ display: customStyles.errorIconDisplay }}
        />
        <p
          className={styles.errorMessage}
          style={{ display: customStyles.errorDisplay }}
        >
          Please provide a valid email
        </p>
      </form>
    </div>
  );
};

export default Details;
