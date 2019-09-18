import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import userImage from './user2.jpg';

//passing stupid travis

export default function Header({ user_type, name }) {
  return(
    <section className={styles.section}>
      <h3>{user_type} Account</h3>
      {name}
      <img src={userImage} alt='user png' height='40'/>
    </section>
  );
}

Header.propTypes = {
  user_type: PropTypes.string,
  name: PropTypes.string
};
