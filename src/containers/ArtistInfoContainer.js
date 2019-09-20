import { connect } from 'react-redux';
import { getArtistInfoUser } from '../selectors/allSelectors';
import { addUserById } from '../actions/userActions';
import ArtistProfile from '../components/profiles/ArtistProfile';

const mapStateToProps = state => ({
  user: getArtistInfoUser(state)
});

const mapDispatchToProps = dispatch => ({
  addUser(userId) {
    dispatch(addUserById(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfile);
