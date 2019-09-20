import { connect } from 'react-redux';
import { getArtistInfoUser, getCurrentUser } from '../selectors/allSelectors';
import { addArtistInfo } from '../actions/userActions';
import ArtistProfile from '../components/profiles/ArtistProfile';
import { createPartnership } from '../actions/partnershipActions';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  profileUser: getArtistInfoUser(state)
});

const mapDispatchToProps = dispatch => ({
  addUser(userId) {
    dispatch(addArtistInfo(userId));
  },
  addPartnership(currentUser, profileUser) {
    dispatch(createPartnership(currentUser, profileUser));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfile);
