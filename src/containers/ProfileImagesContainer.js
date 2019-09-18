import { connect } from 'react-redux';
import ImageGrid from '../components/images/ImageGrid';
import { getProfileImages } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  images: getProfileImages(state)
});

export default connect(
  mapStateToProps
)(ImageGrid);
