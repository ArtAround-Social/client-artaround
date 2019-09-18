
const initialState = {
  profileInfo: {
    galleryName: 'MarkovCo Gallery',
    galleryLocation: 'Portland',
    styles: [{ id:1, style: 'abstract' }, { id: 2, style: 'modern' }],
    rules: 'we take all your money!!!!',
    owner: 'Trifon',
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
