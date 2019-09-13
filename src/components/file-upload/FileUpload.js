import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import postImage from '../../services/fileApi';

function FileUpload(){
  const onDrop = useCallback(
    ([file]) => {
      console.log(file);
      postImage(file);
    }
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return(
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive 
        ? (<p>Drop the image here ...</p>)
        : (<p>Drag and drop the image here, or click to select image</p>)
      }
    </div>
  );
}

// FileUpload.propTypes = {
//   onDrop: PropTypes.func.isRequired,
// };

export default FileUpload;
