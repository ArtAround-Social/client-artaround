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
    <h5 key={style.id}>{style},</h5>
  );

  const mediumElement = mediums.map(medium => 
    <h5 key={medium.id}>{medium},</h5>
  );

  return(
    <div>
      <h3>Profile Info</h3>
      <h3>{artistName}</h3>
      <h4>{artistLocation}</h4>
      <img src={poster.poster}/>
      <p>{styleElement}</p>
      <p>{mediumElement}</p>
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
}

export default ArtistProfileInfo;
