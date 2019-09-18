import React from 'react';
import PropTypes from 'prop-types';

function ReviewButtons({ handleAccept, handleReject }) {
  return(
    <div>
      <button onClick={handleReject}>Reject Partnership</button>
      <button onClick={handleAccept}>Accept Partnership</button>
    </div>
  );
}

ReviewButtons.propTypes = {
  handleAccept: PropTypes.func,
  handleReject: PropTypes.func
};

export default ReviewButtons;
