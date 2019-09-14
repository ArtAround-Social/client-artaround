import React from 'react';
import PropTypes from 'prop-types';

function LandingPage({ allImages }) {
  
  const imagesElement = allImages.map(image => (
    <div key={image.id}>
      <img src={image.url}/>
    </div>
  ));

  return(
    <>
      <div>
        <a href=''>Create Account</a>
        <a href=''>Sign In</a>
      </div>
      <div>{imagesElement}</div>
    </>
  );
}

LandingPage.propTypes = {
  allImages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string.isRequired
  }))
};

export default LandingPage;
