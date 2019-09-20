import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PartnersList.css';

function PartnerItem({ partner }) {
  return(
    <div className={styles.item}>
      {partner.name}
      <Link to='artist/:id' className={styles.profile}>Go to Profile</Link> 
    </div>
  );
}

PartnerItem.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string
  })
};

export default PartnerItem;
//also Link suposed to go to galleries too
