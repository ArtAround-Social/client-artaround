import { connect } from 'react-redux';
import InviteList from '../components/invites/InviteList';
import { getInvites } from '../selectors/allSelectors';

const mapStateToProps = state => ({
  invites: getInvites(state)
});

export default connect(
  mapStateToProps
)(InviteList);
