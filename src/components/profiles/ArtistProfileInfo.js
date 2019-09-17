import React from 'react';
import PropTypes from 'prop-types';

function ArtistProfileInfo({
  artistName,
  artistLocation,
  styles,
  mediums,
  poster,
  phone,
  email
}) {
  
  const styleElement = styles.map(style => 
    <p key={style.id}>{style.style},</p>
  );

  const mediumElement = mediums.map(medium => 
    <p key={medium.id}>{medium.medium},</p>
  );

  return(
    <div>
      <h3>Profile Info</h3>
      <h3>{artistName}</h3>
      <h3>{artistLocation}</h3>
      <img src={poster.poster} width='200px'/>
      <h5>{styleElement}</h5>
      <h5>{mediumElement}</h5>
      <div>
        <h5>{phone}</h5>
        <h5>{email}</h5>
      </div>
    </div>
  );
}

ArtistProfileInfo.propTypes = {
  artistLocation: PropTypes.string,
  artistName: PropTypes.string,
  styles:PropTypes.arrayOf(PropTypes.shape({
    style: PropTypes.string
  })),
  mediums: PropTypes.arrayOf(PropTypes.shape({
    medium: PropTypes.string
  })),
  poster: PropTypes.shape({
    poster: PropTypes.string
  }),
  phone: PropTypes.string,
  email: PropTypes.string
};

export default ArtistProfileInfo;
