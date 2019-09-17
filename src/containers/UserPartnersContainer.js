import { connect } from 'react-redux';
import PartnersList from '../components/partners/PartnersList';
import { getPartners } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  partners: getPartners(state)
});

export default connect(
  mapStateToProps
)(PartnersList);
