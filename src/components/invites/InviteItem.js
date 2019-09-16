import React from 'react';
import PropTypes from 'prop-types';

function Invite({ invitation, handleReview }) {
  return(
    <div>
      {invitation.name}
      <button onClick={handleReview}>Review</button>
    </div>
  );
}

Invite.propTypes = {
  invitation: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  handleReview: PropTypes.func.isRequired
};

export default Invite;
