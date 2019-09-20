# artaround-client
Frontend client side code of artaround project.

# Spare Code

// Jons postImage route
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


