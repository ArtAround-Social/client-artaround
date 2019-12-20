import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { postImage } from '../../services/fileApi';
import styles from './FileUpload.css';

function FileUpload({ id, type }){
  const onDrop = useCallback(
    ([file]) => {
      postImage(file, id, type);
    }
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return(
    <div className={styles.upload} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive 
        ? (<p>Drop the image here ...</p>)
        : (<p>Drag and drop the image here, or click to select image</p>)
      }
    </div>
  );
}

FileUpload.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};

export default FileUpload;
