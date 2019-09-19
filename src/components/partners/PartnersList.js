import React from 'react';
import PropTypes from 'prop-types';
import PartnerItem from './PartnerItem';
import styles from './PartnersList.css';

function PartnersList({ partners }) {
  const partnersElement = partners.map(partner => (
    <li key={partner.id}>
      <PartnerItem partner={partner} />
    </li>
  ));

  return(
    <div>
      <h4 className={styles.partners}>PARTNERS</h4>
      <ul className={styles.list}>{partnersElement}</ul>
    </div>
  );
}

PartnersList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default PartnersList;
