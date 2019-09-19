import { connect } from 'react-redux';
import Header from '../components/header/Header';
import { getAccountType, getAccountName } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  userType: getAccountType(state),
  name: getAccountName(state)
});

export default connect(
  mapStateToProps
)(Header);
