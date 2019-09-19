import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGrid.css';

function ImageGrid({ getUserImages, images, user }) {
  const imageElement = images.map(image => (
    <img key={image.id} src={image.url}/>
  ));
  console.log(user);
    
  useEffect(() => {
    if(user && user._id) getUserImages(user);
  }, [user]);

  return(
    <>
    <div className={styles.div}>
    
      <div className={styles.images}>
        {imageElement}
      </div>
    </div>
    </>
  );
}


ImageGrid.propTypes = {
  getUserImages: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string
  })),
  user: PropTypes.shape({
    _id: PropTypes.string
  })
};

export default ImageGrid;
