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

export const findUser = ({ userAuth0Id }) => {
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
