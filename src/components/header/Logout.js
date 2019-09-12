import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logout.css';

function Logout({ handleLogout }) {
  return(
    <button className={styles.button} onClick={handleLogout}>Logout</button>
  );
}

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default Logout;
