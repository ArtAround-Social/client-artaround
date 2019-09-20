import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AllArtists.css';
import image from '../../../assets/logo.png';

function AnArtist({ artist }) {
  console.log(artist);
  
  return(
    <Link className={styles.artist} to='/artistprofile'>
      <img  src={image} width='150px'/>
      <p>{artist.name}</p>
    </Link>
  );
}

AnArtist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })
};

export default AnArtist;
