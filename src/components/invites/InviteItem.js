import React from 'react';
import PropTypes from 'prop-types';

function Invite({ invintation, handleReview }) {
  return(
    <div>
      {invintation.name}
      <button onClick={handleReview}>Review</button>
    </div>
  );
}

Invite.propTypes = {
  invintation: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  handleReview: PropTypes.func.isRequired
};

export default Invite;
