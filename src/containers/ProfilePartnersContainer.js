import { connect } from 'react-redux';
import PartnersList from '../components/partners/PartnersList';
import { getProfilePartners } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  partners: getProfilePartners(state)
});

export default connect(
  mapStateToProps
)(PartnersList);
