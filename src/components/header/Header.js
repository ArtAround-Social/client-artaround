import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import userImage from './user2.jpg';

export default function Header({ user_type, handleLogout, name }) {
  return(
    <section className={styles.section}>
      <h3>{user_type} Account</h3>
      <button className={styles.button} onClick={handleLogout}>Logout</button>
      {name}
      <img src={userImage} alt='user png' height='40'/>
    </section>
  );
}

Header.propTypes = {
  user_type: PropTypes.string,
  handleLogout: PropTypes.func,
  name: PropTypes.string
};
