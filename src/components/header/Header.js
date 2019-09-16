import React from 'react';
import AccountType from './AccountType';
import UserProfile from './UserProfile';
import Logout from './Logout';
import styles from './Header.css';

export default function Header() {
  return(
    <section className={styles.section}>
      <div className={styles.headerleft}>
        <AccountType />
      </div>
      <div className={styles.headerright}>
        <UserProfile />
        <Logout />
      </div>
    </section>
  );
}
