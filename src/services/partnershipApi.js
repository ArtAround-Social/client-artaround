export const postPartnership = ({ artist, gallery, active }) => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/partnerships', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ artist, gallery, active })
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to post PARTNERSHIP';
      return res.json();
    });
};

export const getPartnership = () => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/partnerships', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to GET all PARTNERSHIPS';
      return res.json();
    });
};

export const getGalArtistPartnership = () => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/users/gallery-partners', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to GET PARTNERSHIP with GALLERY-ARTIST agg';
      return res.json();
    });
};

export const putPartnership = ({ artist, gallery, active }) => {
  return fetch('https://artaround-test-app.herokuapp.com/api/v1/partnerships', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ artist, gallery, active })
  })
    .then(res => {
      if(!res.ok) throw 'ERROR - unable to PUT (update) PARTNERSHIP';
      return res.json();
    });
};
