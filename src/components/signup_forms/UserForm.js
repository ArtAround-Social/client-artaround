import React, { useState } from 'react';
import { createUser } from '../../services/userApi';
// import PropTypes from 'prop-types';

function UserForm() {
  const [userType, updateType] = useState('');
  const [name, updateName] = useState('');
  const [galleryName, updateGalleryName] = useState('');
  const [location, updateLocation] = useState('');
  const [phone, updatePhone] = useState('');
  const [email, updateEmail] = useState('');
  const [rules, updateRules] = useState('');
  const userAuth0Id = 'auth0|12345678';

  const handleTypeChange = ({ target }) => updateType(target.value);
  const handleNameChange = ({ target }) => updateName(target.value);
  const handleGalleryNameChange = ({ target }) => updateGalleryName(target.value);
  const handleLocationChange = ({ target }) => updateLocation(target.value);
  const handlePhoneChange = ({ target }) => updatePhone(target.value);
  const handleEmailChange = ({ target }) => updateEmail(target.value);
  const handleRulesChange = ({ target }) => updateRules(target.value);

  const handleSubmit = () => createUser({
    userType,
    name,
    galleryName,
    location,
    userAuth0Id,
    phone,
    email,
    rules
  });

  return(
    <form onSubmit={handleSubmit}>
      <select value={userType} onChange={handleTypeChange}>
        <option value="artist">Artist</option>
        <option value="gallery">Gallery</option>
      </select>
      <input placeholder='Name' value={name} onChange={handleNameChange} required={true} />
      <input placeholder='Gallery Name' value={galleryName} onChange={handleGalleryNameChange} />
      <input placeholder='Location' value={location} onChange={handleLocationChange} required={true} />
      <input placeholder='Phone #' value={phone} onChange={handlePhoneChange} required={true} />
      <input placeholder='Email' value={email} onChange={handleEmailChange} required={true} />
      <input placeholder='Rules' value={rules} onChange={handleRulesChange} required={true} />
      <button>Submit</button>
    </form>
  );
}

// UserForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleTypeChange: PropTypes.func.isRequired,
//   userType: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
//   galleryName: PropTypes.string,
//   location: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   rules: PropTypes.string
// };

export default UserForm;

// Previous props
// {
//   handleSubmit,
//   handleTypeChange,
//   userType,
//   userName,
//   galleryName,
//   location,
//   phone,
//   email,
//   rules
// }
