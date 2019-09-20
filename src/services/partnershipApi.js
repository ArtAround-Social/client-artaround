const apiUrl = process.env.API_URL;

export const postPartnership = ({ artist, gallery, active }) => {
  return fetch(`${apiUrl}/api/v1/partnerships`, {
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
  return fetch(`${apiUrl}/api/v1/partnerships`, {
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

export const getUserPartnerships = (user  = {}) => {
  
  return fetch(`${apiUrl}/api/v1/partnerships/user-partners/${user._id}`, {
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
  return fetch(`${apiUrl}/api/v1/partnerships`, {
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
