const apiUrl = process.env.API_URL;
// const herokuURL = 'https://artaround-test-app.herokuapp.com/api/v1/users';

export const createUser = ({ user_type, name, location, userAuth0Id, phone, email, poster, styles, mediums, rules }) => {
  return fetch(`${apiUrl}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ user_type, name, location, userAuth0Id, phone, email, poster, styles, mediums, rules })
  })
    .then(res => {
      if(!res.ok) throw 'Cannot add user';
      return res.json();
    });
};

export const findUser = ({ userAuth0Id }) => {
  return fetch(`${apiUrl}/api/v1/users/${userAuth0Id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ userAuth0Id })
  })
    .then(res => {
      if(!res.ok) throw 'Cannot find user';
      return res.json();
    });
};
