import React from 'react';
import PropTypes from 'prop-types';

function PartnerItem({ partner, goToPofile }) {
  return(
    <div>
      {partner.name}
      <button onClick={goToPofile}>Profile</button>
    </div>
  );
}

PartnerItem.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  goToPofile: PropTypes.func.isRequired
};

export default PartnerItem;
