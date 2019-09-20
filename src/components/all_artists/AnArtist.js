import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AllArtists.css';

function AnArtist({ artist, imgUrl }) {
  const placeholder = '../../../assets/placeholder.jpg';
  return(
    <Link className={styles.artist} to={(`/artist/${artist._id}`)}>
      <p>{artist.name}</p>
      <img  src={imgUrl || placeholder} width='150px'/>
    </Link>
  );
}

AnArtist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string
  }),
  imgUrl: PropTypes.string
};

export default AnArtist;
