import React from 'react';
import PropTypes from 'prop-types';
import stylesCss from './ProfileInfo.css';

function GalleryProfileInfo({
  galleryLocation,
  galleryName,
  // styles,
  rules,
  owner,
  phone,
  email
}) {

  // const styleElement = styles.map(style => 
  //   <p key={style.id}>{style.style},</p>
  // );

  return(
    <div className={stylesCss.info}>
      <h3>Profile Info</h3>
      <h3>{galleryName}</h3>
      <h4>{galleryLocation}</h4>
      {/* <h5>{styleElement}</h5> */}
      <h3>Rules: {rules}</h3>
      <div>
        <h5>{owner}</h5>
        <h5>{phone}</h5>
        <h5>{email}</h5>
      </div>
    </div>
  );
}

GalleryProfileInfo.propTypes = {
  galleryLocation: PropTypes.string,
  galleryName: PropTypes.string,
  // styles:PropTypes.arrayOf(PropTypes.shape({
  //   style: PropTypes.string
  // })),
  rules: PropTypes.string,
  owner: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string
};

export default GalleryProfileInfo;
