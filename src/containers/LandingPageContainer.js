import { connect } from 'react-redux';
import LandingPage from '../components/landing_page/LandingPage';
import { Signin } from '../actions/landingPageAction';

const mapDispatchToProps = dispatch => ({
  handleSignin(event) {
    event.preventDefault();
    dispatch(Signin({
      email: event.target[0].value,
      password: event.target[1].value
    }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
