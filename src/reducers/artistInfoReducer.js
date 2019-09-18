
const initialState = {
  profileInfo: {
    artistName: 'Vasily Markov',
    artistLocation: 'Portland',
    styles: [{ id:1, style: 'abstract' }, { id: 2, style: 'modern' }],
    mediums: [{ id:1, medium: 'oil' }, { id: 2, medium: 'ink' }],
    poster: { id: 34, poster: 'https://www.goodfreephotos.com/albums/people/man-sitting-on-the-beach-monochrome.jpg' },
    phone: '503-954-4973',
    email: 'markovavasily@gmail.com'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
