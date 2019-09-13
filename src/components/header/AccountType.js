import React from 'react';
import PropTypes from 'prop-types';

function AccountType({ user_type }) {
  return(
    <h3>{user_type} Account</h3>
  );
}

AccountType.propTypes = {
  user_type: PropTypes.string.isRequired
};

export default AccountType;
