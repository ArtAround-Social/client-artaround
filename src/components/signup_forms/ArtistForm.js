import React from 'react';
import PropTypes from 'prop-types';

function ArtistForm({
  handleSubmit,
  artistName,
  artistLocation,
  mediums,
  styles,
  email,
  password
}) {
  return(
    <form onSubmit={handleSubmit}>
      <input placeholder='Name' value={artistName}/>
      <input placeholder='Location' value={artistLocation}/>
      <input placeholder='Medium' value={mediums}/>
      <input placeholder='Style' value={styles}/>
      <input placeholder='Email' value={email}/>
      <input placeholder='Password' value={password}/>
      <button>Submit</button>
    </form>
  );
}

ArtistForm.propTypes = {
  artistName: PropTypes.string,
  artistLocation: PropTypes.string,
  mediums: PropTypes.string,
  styles: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default ArtistForm;
