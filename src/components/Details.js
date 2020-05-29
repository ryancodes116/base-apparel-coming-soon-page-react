import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';

const Details = () => {
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
    </div>
  );
};

export default Details;
