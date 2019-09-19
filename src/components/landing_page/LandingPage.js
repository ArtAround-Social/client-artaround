import React from 'react';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './LandingPage.css';
import logo from '../../../assets/logo.png';

function LandingPage() {
  return(
    <div className={styles.text}>
      <link href="https://fonts.googleapis.com/css?family=Gabriela&display=swap" rel="stylesheet"></link>
      <AuthHeader/>
      <h1 className={styles.page}>❇ WELCOME TO ART AROUND ❇</h1>
      <img src={logo} className={styles.logo}/>
      <h2 className={styles.text}>“If you want to really hurt you parents, 
      and you dont have the nerve to be gay,
      the least you can do is go into the arts. 
      Im not kidding. The arts are not a way to make a living.
      They are a very human way of making life more bearable.
      You will get an enormous reward.
      You will have created something.”<br/>
      ― Kurt Vonnegut, A Man Without a Country</h2>
    </div>
  );

}
export default LandingPage;
