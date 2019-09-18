import { connect } from 'react-redux';
import ImageGrid from '../components/images/ImageGrid';
import { getUserImages } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  images: getUserImages(state)
});

export default connect(
  mapStateToProps
)(ImageGrid);
