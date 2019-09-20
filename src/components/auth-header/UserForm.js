import React, { useState } from 'react';
import { createUser } from '../../services/userApi';
import PropTypes from 'prop-types';
import styles from './UserForm.css';

function UserForm({ userAuth0Id, getUser }) {

  const [userType, updateType] = useState('artist');
  const [name, updateName] = useState('');
  const [galleryName, updateGalleryName] = useState('');
  const [location, updateLocation] = useState('');
  const [phone, updatePhone] = useState('');
  const [email, updateEmail] = useState('');
  const [rules, updateRules] = useState('');

  const handleTypeChange = ({ target }) => updateType(target.value);
  const handleNameChange = ({ target }) => updateName(target.value);
  const handleGalleryNameChange = ({ target }) => updateGalleryName(target.value);
  const handleLocationChange = ({ target }) => updateLocation(target.value);
  const handlePhoneChange = ({ target }) => updatePhone(target.value);
  const handleEmailChange = ({ target }) => updateEmail(target.value);
  const handleRulesChange = ({ target }) => updateRules(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({
      userType,
      name,
      galleryName,
      location,
      userAuth0Id,
      phone,
      email,
      rules
    });
    getUser(userAuth0Id);
    console.log('FormSubmitted!!!');
  };
    
  return(
    <form className={styles.form} onSubmit={handleSubmit}>
      <select value={userType} onChange={handleTypeChange}>
        <option value="artist">Artist</option>
        <option value="gallery">Gallery</option>
      </select>
      <input placeholder='Name' value={name} onChange={handleNameChange} required={true} />
      <input placeholder='Location' value={location} onChange={handleLocationChange} required={true} />
      <input placeholder='Phone #' value={phone} onChange={handlePhoneChange} required={true} />
      <input placeholder='Email' value={email} onChange={handleEmailChange} required={true} /><br/>
      <input placeholder='Gallery Name' value={galleryName} onChange={handleGalleryNameChange} width='180px'/>
      <input placeholder='Main Rules(only for gallery accounts)' value={rules} onChange={handleRulesChange}/>
      <button>Submit</button>
    </form>
  );
}

UserForm.propTypes = {
  userAuth0Id: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired
};

export default UserForm;
