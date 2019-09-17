import React from 'react';
import PropTypes from 'prop-types';
import AnArtist from './AnArtist';

function AllArtists({ allartists }) {
  const artistElement = allartists.map(artist => (
    <li key={artist.id}>
      <AnArtist artist={artist} />
    </li>
  ));

  return(
    <ul>{artistElement}</ul>
  );
}

AllArtists.propTypes = {
  allartists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }))
};

export default AllArtists;
