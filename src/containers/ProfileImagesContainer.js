import { connect } from 'react-redux';
import ProfileImageGrid from '../components/images/ProfileImageGrid';
import { getProfileImages } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  images: getProfileImages(state)
});

export default connect(
  mapStateToProps
)(ProfileImageGrid);
