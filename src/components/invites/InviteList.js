import React from 'react';
import PropTypes from 'prop-types';
import InviteItem from './InviteItem';

function InviteList({ invites }) {
  const inviteElement = invites.map(invitation => (
    <li key={invitation.id}>
      <InviteItem invitation={invitation} />
    </li>
  ));

  return(
    <ul>{inviteElement}</ul>
  );
}

InviteList.propTypes = {
  invites: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default InviteList;
