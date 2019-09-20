import React from 'react';
import PropTypes from 'prop-types';
import stylesCss from './ProfileInfo.css';

function ArtistProfileInfo({ user }) {
  
  // const styleElement = styles.map(style => 
  //   <p key={style.id}>{style.style},</p>
  // );

  // const mediumElement = mediums.map(medium => 
  //   <p key={medium.id}>{medium.medium},</p>
  // );

  return(
    <div className={stylesCss.info}>
      <h3>Profile Info</h3>
      <h3>{user.name}</h3>
      <h3>{user.location}</h3>
      {/* <img src={poster.poster} width='200px'/> */}
      {/* <h5>{styleElement}</h5> */}
      {/* <h5>{mediumElement}</h5> */}
      <div className={stylesCss.contacts}>
        <h5>{user.phone}</h5>
        <h5>{user.email}</h5>
      </div>
    </div>
  );
}

ArtistProfileInfo.propTypes = {
  user: PropTypes.object
};

export default ArtistProfileInfo;
