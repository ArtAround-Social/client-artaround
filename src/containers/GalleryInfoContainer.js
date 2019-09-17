import { connect } from 'react-redux';
import GalleryProfileInfo from '../components/profiles/GallleryProfileInfo';
import { getGalleryName, getGalleryLocation, getGalleryStyles, getGalleryRules, getGalleryOwner, getGalleryPhone, getGalleryEmail } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  galleryName: getGalleryName(state),
  galleryLocation: getGalleryLocation(state),
  styles: getGalleryStyles(state),
  rules: getGalleryRules(state),
  owner: getGalleryOwner(state),
  phone: getGalleryPhone(state),
  email: getGalleryEmail(state)
});

export default connect(
  mapStateToProps
)(GalleryProfileInfo);
