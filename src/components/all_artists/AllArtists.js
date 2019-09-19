import React from 'react';
import PropTypes from 'prop-types';
import AnArtist from './AnArtist';
import styles from './AllArtists.css';
import AuthHeader from '../auth-header/AuthHeader';

function AllArtists({ allartists }) {
  const artistElement = allartists.map(artist => (
    <div className={styles.item} key={artist.id}>
      <AnArtist artist={artist} />
    </div>
  ));

  return(
    <>
      <AuthHeader/>
      <div className={styles.div}>{artistElement}</div>
    </>
  );
}

AllArtists.propTypes = {
  allartists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }))
};

export default AllArtists;
