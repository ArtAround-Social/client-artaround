import React from 'react';
import PropTypes from 'prop-types';

function Logout({ handleLogout }) {
  return(
    <button onClick={handleLogout}>Logout</button>
  );
}

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default Logout;
