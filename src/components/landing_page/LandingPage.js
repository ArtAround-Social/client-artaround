import React from 'react';
import styles from './LandingPage.css';
import logo from '../../../assets/logo.png';
import AuthHeader from '../auth-header/AuthHeader';

function LandingPage() {
  return(
    <div className={styles.text}>
      <link href='https://fonts.googleapis.com/css?family=Gabriela&display=swap' rel='stylesheet'></link>
      <AuthHeader/>
      <h1 className={styles.page}>❇ WELCOME TO ART AROUND ❇</h1>
      <img src={logo} className={styles.logo}/>
      <h2 className={styles.text}>“Connectiong Artist and Galleries”</h2>
    </div>
  );

}
export default LandingPage;
