import { connect } from 'react-redux';
import AllArtists from '../components/all_artists/AllArtists';
import { getAllArtists } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  allartists: getAllArtists(state)
});

export default connect(
  mapStateToProps
)(AllArtists);
