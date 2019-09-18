import { connect } from 'react-redux';
import PartnersList from '../components/partners/PartnersList';
import { getUserPartners } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  partners: getUserPartners(state)
});

export default connect(
  mapStateToProps
)(PartnersList);
