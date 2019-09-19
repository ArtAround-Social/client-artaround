const apiUrl = process.env.API_URL;
// const herokuURL = 'https://artaround-test-app.herokuapp.com/api/v1/users';

export const createUser = ({
  user_type,
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
      user_type,
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

export const postImage = ({ artName, imgUrl, mediums, styles, artist }) => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/artworks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ artName, imgUrl, artist, mediums, styles })
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to post IMAGE';
      return res.json();
    });
};

// export const postPartnership = ({ artist, gallery, active }) => {
//   return fetch('https://artaround-test-app.herokuapp.com/api/v1/partnerships', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({ artist, gallery, active })
//   })
//     .then(res => {
//       if(!res.ok) throw 'ERROR - unable to post PARTNERSHIP';
//       return res.json();
//     });
// };

// export const userById = ({ userID }) => {
//   return fetch(`https://artaround-test-app.herokuapp.com/api/v1/users/${userID}`, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json'
//     }
//   })
//     .then(res => {
//       if(!res.ok) throw 'ERROR - can not post image';
//       return res.json();
//     });
// };