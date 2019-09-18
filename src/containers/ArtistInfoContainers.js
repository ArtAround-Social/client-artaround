import { connect } from 'react-redux';
import ArtistProfileInfo from '../components/profiles/ArtistProfileInfo';
import { getArtistName, getArtistLocation, getArtistStyles, getArtistMediums, getArtistPoster, getArtistPhone, getArtistEmail } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  artistName: getArtistName(state),
  artistLocation: getArtistLocation(state),
  styles: getArtistStyles(state),
  mediums: getArtistMediums(state),
  poster: getArtistPoster(state),
  phone: getArtistPhone(state),
  email: getArtistEmail(state)
});

export default connect(
  mapStateToProps
)(ArtistProfileInfo);
