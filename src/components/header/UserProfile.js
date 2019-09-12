import React from 'react';
import PropTypes from 'prop-types';
import userImage from './user.png';

function UserProfile({ name }) {
  return(
    <>
      <h4>{name}</h4>
      <img src={userImage} alt='user png'/>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserProfile;
