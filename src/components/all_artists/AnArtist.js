import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AnArtist({ artist }) {
  return(
    <Link to='/artist/:id'>
      <img src={artist.imgUrl} width='100px'/>
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
