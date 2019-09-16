import { connect } from 'react-redux';
import ArtistForm from '../components/signup_forms/ArtistForm';
import { createArtist } from '../actions/ArtistFomActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {  
    event.preventDefault();
    dispatch(createArtist({
      artistName: event.target[0].value,
      artistLocation: event.target[1].value,
      mediums: event.target[2].value,
      styles: event.target[3].value,
      email: event.target[4].value,
      password: event.target[5].value
    }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ArtistForm);
