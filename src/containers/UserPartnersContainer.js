import { connect } from 'react-redux';
import PartnersList from '../components/partners/PartnersList';
import { getUserPartners, getCurrentUser } from '../selectors/allSelectors';
import { getPartnerships } from '../actions/partnershipActions';

const mapStateToProps = state => ({
  partners: getUserPartners(state),
  user: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  getPartnershipsArr(user) {
    
    dispatch(getPartnerships(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnersList);
