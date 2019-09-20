import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnArtist from './AnArtist';
import styles from './AllArtists.css';
import AuthHeader from '../auth-header/AuthHeader';

function AllArtists({ allartists, getAllArtists }) {
  const artistElement = allartists.map(artist => (
    <div className={styles.item} key={artist.id}>
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
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }))
};

export default AllArtists;
