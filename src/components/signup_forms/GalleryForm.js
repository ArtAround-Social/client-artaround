import React from 'react';
import PropTypes from 'prop-types';

function GalleryForm({
  handleSubmit,
  galleryName,
  galleryLocation,
  owener,
  email,
  password
}) {
  return(
    <form onSubmit={handleSubmit}>
      <input placeholder='Gallery Name' value={galleryName}/>
      <input placeholder='Location' value={galleryLocation}/>
      <input placeholder='Owener' value={owener}/>
      <input placeholder='Email' value={email}/>
      <input placeholder='Password' value={password}/>
      <button>Submit</button>
    </form>
  );
}

GalleryForm.propTypes = {
  galleryName: PropTypes.string,
  galleryLocation: PropTypes.string,
  owener: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default GalleryForm;
