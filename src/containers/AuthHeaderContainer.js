import { connect } from 'react-redux';
import AuthHeader from '../components/auth-header/AuthHeader';
import { getAuthUser } from '../actions/userActions';
import { getCurrentUser } from '../selectors/allSelectors';

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
)(AuthHeader);
