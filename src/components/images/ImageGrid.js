import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGrid.css';
import shortid from 'shortid';
import FileUpload from '../file-upload/FileUpload';

function ImageGrid({ getUserImagesArr, images, user }) {
  const imageElement = images.map(image => (
    <img key={shortid.generate()} src={image.imgUrl}/>
  ));
  console.log(user);
    
  useEffect(() => {
    if(user && user._id) getUserImagesArr(user);
    // if(user && user._id) updateUserImagesArr(user);
  }, [user, images]);



  return(
    <>
        {/* <h4>{user.userType} account</h4> */}
    <FileUpload id={user._id} type={user.userType}/>
    <div className={styles.div}>
      <div className={styles.images}>
        {imageElement}
      </div>
    </div>
    </>
  );
}


ImageGrid.propTypes = {
  updateUserImagesArr: PropTypes.func,
  getUserImagesArr: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string
  })),
  user: PropTypes.shape({
    _id: PropTypes.string,
    userType: PropTypes.string
  })
};

export default ImageGrid;
