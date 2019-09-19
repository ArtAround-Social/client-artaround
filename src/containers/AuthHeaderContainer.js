import { connect } from 'react-redux';
import AuthHeader from '../components/auth-header/AuthHeader';
import { getUser } from '../actions/userActions';
import { getCurrentUser } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  userById(userSub) {
    console.log(userSub);
    
    dispatch(getUser(userSub));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHeader);
