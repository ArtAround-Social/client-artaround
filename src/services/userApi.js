export const addGallery = ({ galleryName, galleryLoaction, owener, email, password }) => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/galleries', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ galleryName, galleryLoaction, owener, email, password })
  })
    .then(res => {
      if(!res.ok) throw 'can not add gallery';
      return res.json();
    });
};

export const addArtist = ({ artistName, artistLocation, mediums, styles, email, password }) => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/artists', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ artistName, artistLocation, mediums, styles, email, password })
  })
    .then(res => {
      if(!res.ok) throw 'can not create artist';
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