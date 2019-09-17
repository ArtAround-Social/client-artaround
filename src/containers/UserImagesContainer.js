import { connect } from 'react-redux';
import ImageGrid from '../components/images/ImageGrid';
import { getImages } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  images: getImages(state)
});

export default connect(
  mapStateToProps
)(ImageGrid);
