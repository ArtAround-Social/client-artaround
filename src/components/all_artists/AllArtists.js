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
    <div>
      <AuthHeader/>
      <p>LET'S IMAGINE WE CAN FILTER ALL THESE ARTISTS... 😊
        <button>Price</button>
        <button>Style</button>
        <button>Medium</button>
        <button>Size</button>
        <button>Artist's name</button>
        <button>Location</button>
      </p><br/>
      <div className={styles.div}>{artistElement}</div>
    </div>
  );
}

AllArtists.propTypes = {
  getAllArtists: PropTypes.func,
  allartists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default AllArtists;
