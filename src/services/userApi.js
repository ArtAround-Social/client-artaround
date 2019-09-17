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
