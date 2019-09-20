
const apiUrl = process.env.API_URL;
// const herokuURL = 'https://artaround-test-app.herokuapp.com/api/v1/users';

export const createUser = ({
  userType,
  name,
  galleryName,
  location,
  styles,
  mediums,
  poster,
  userAuth0Id,
  phone,
  email,
  rules
}) => {
  return fetch(`${apiUrl}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userType,
      name,
      galleryName,
      location,
      styles,
      mediums,
      poster,
      userAuth0Id,
      phone,
      email,
      rules
    })
  })
    .then(res => {
      if(!res.ok) throw 'Cannot add user';
      return res.json();
    });
};

export const findUserByAuthId = ({ userAuth0Id }) => {
  return fetch(`${apiUrl}/api/v1/users/auth0/${userAuth0Id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Cannot find user';
      return res.json();
    });
};

export const userById = ({ userId }) => {
  return fetch(`${apiUrl}/api/v1/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - can not find user';
      return res.json();
    });
};

export const allArtists = () => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/users/all-artists', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - can not get all artists';
      return res.json();
    });
};


export const userImages = (user  = {}) => {
  console.log(user._id);
  
  return fetch(`https://artaround-test-app.herokuapp.com/api/v1/artworks/user-with-artwork/${user._id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - can not get iser images';
      return res.json();
    });
};

