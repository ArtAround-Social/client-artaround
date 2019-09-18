import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PartnerItem({ partner }) {
  return(
    <div>
      {partner.name}
      <Link to='artist/:id'>Go to Profile</Link> 
    </div>
  );
}

PartnerItem.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default PartnerItem;
//also Link suposed to go to galleries too
