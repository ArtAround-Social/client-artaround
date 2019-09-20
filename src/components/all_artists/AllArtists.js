import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnArtist from './AnArtist';
import styles from './AllArtists.css';
import AuthHeader from '../auth-header/AuthHeader';

const shortid = require('shortid');
function AllArtists({ allartists, getAllArtists }) {
  console.log('ALLARTISTS', allartists);
  const artistElement = allartists.map(artist => (
    <div key={shortid.generate()} className={styles.item}>
      <AnArtist artist={artist} />
    </div>
  ));

  useEffect(() => {
    getAllArtists();
  }, []);

  return(
    <>
      <AuthHeader/>
      <div className={styles.div}>
        {artistElement}
      </div>
    </>
  );
}

AllArtists.propTypes = {
  getAllArtists: PropTypes.func,
  allartists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default AllArtists;
