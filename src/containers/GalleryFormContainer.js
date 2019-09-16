import { connect } from 'react-redux';
import GalleryForm from '../components/signup_forms/GalleryForm';
import { createGallery } from '../actions/GalleryFormActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {  
    event.preventDefault();
    dispatch(createGallery({
      galleryName: event.target[0].value,
      galleryLocation: event.target[1].value,
      owener: event.target[2].value,
      email: event.target[3].value,
      password: event.target[4].value
    }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(GalleryForm);
