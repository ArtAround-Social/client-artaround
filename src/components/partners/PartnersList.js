import React from 'react';
import PropTypes from 'prop-types';
import PartnerItem from './PartnerItem';

function PartnersList({ partners }) {
  const partnersElement = partners.map(partner => (
    <li key={partner.id}>
      <PartnerItem partner={partner} />
    </li>
  ));

  return(
    <ul>{partnersElement}</ul>
  );
}

PartnersList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default PartnersList;
