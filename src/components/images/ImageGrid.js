import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGrid.css';

function ImageGrid({ images }) {
  const imageElement = images.map(image => (
    <img key={image.id} src={image.url}/>
  ));

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
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string
  })),
  small: PropTypes.func
};

export default ImageGrid;
