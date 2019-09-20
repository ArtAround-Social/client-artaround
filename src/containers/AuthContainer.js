import { connect } from 'react-redux';
import { getAuthUser } from '../actions/userActions';
import { getCurrentUser } from '../selectors/allSelectors';
import AuthPage from '../components/auth-header/AuthPage';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  userById(userSub) {
    dispatch(getAuthUser(userSub));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);
