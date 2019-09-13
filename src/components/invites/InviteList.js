import React from 'react';
import PropTypes from 'prop-types';
import InviteItem from './InviteItem';

function InviteList({ invites }) {
  const inviteElement = invites.map(invintation => (
    <li key={invintation.id}>
      <InviteItem invintation={invintation} />
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
