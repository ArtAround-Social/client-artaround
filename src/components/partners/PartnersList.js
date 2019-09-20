import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PartnerItem from './PartnerItem';
import styles from './PartnersList.css';
import shortid from 'shortid';

function PartnersList({ getPartnershipsArr, partners, user }) {
  
  const partnersElement = partners.map(partner => (
    <li key={shortid.generate()}>
      <PartnerItem partner={partner} />
    </li>
  ));

  
  useEffect(() => {
    if(user && user._id) getPartnershipsArr(user);
  }, [user]);
  
  return(
    <div>
      <h4 className={styles.partners}>PARTNERS</h4>
      <ul className={styles.list}>{partnersElement}</ul>
    </div>
  );
}

PartnersList.propTypes = {
  getPartnershipsArr: PropTypes.func,
  partners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  user: PropTypes.shape({
    _id: PropTypes.string
  })
};

export default PartnersList;
