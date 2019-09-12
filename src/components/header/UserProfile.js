import React from 'react';
import PropTypes from 'prop-types';
import userImage from './user2.jpg';


function UserProfile() {
  const name = 'Vasily Markov';
  return(
    <>
      {name}
      <img src={userImage} alt='user png' height='40'/>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserProfile;
