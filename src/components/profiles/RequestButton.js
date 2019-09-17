import React from 'react';
import PropTypes from 'prop-types';

function RequestButton({ handleRequest }) {
  return(
    <button onClick={handleRequest}>Request Partnership</button>
  );
}

RequestButton.propTypes = {
  handleRequest: PropTypes.func
};

export default RequestButton;
