import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';

import arrow from '../images/icon-arrow.svg';

const Details = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
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
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
        />
        <a className={styles.arrow}>
          <img src={arrow} />
        </a>
      </form>
    </div>
  );
};

export default Details;
