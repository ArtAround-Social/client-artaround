import { connect } from 'react-redux';
import ImageGrid from '../components/images/ImageGrid';
import { getUserImages, getCurrentUser } from '../selectors/allSelectors';
import { getImages } from '../actions/userActions';

const mapStateToProps = state => ({
  images: getUserImages(state),
  user: getCurrentUser(state)
});



const mapDispatchToProps = dispatch => ({
  getUserImagesArr(user) {
    dispatch(getImages(user));
  }
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
