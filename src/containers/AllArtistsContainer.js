import { connect } from 'react-redux';
import AllArtists from '../components/all_artists/AllArtists';
import { getAllArtists } from '../selectors/allSelectors';
import { getArtists } from '../actions/allArtistsActions';

const mapStateToProps = state => ({
  allartists: getAllArtists(state)
});

const mapDispatchToProps = dispatch => ({
  getAllArtists() {
    dispatch(getArtists());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArtists);
