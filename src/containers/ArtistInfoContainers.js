import { connect } from 'react-redux';
import ArtistProfileInfo from '../components/profiles/ArtistProfileInfo';
import { getArtistInfoUser } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  user: getArtistInfoUser(state)
});

export default connect(
  mapStateToProps
)(ArtistProfileInfo);
