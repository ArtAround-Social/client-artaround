import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGrid.css';
import shortid from 'shortid';

function ImageGrid({  images }) {
  const imageElement = images.map(image => (
    <img key={shortid.generate()} src={image.imgUrl}/>
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
  }))
};

export default ImageGrid;
