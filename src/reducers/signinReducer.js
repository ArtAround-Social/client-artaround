import { SIGNIN } from '../actions/landingPageAction';

const initialState = {
  user: {
    account_type: 'Artist',
    name: 'Vasily Markov',
    email: 'markovavasily@gamil.com',
    password: '12343434'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SIGNIN:
      return{ ...state, user: action.payload };
    default:
      return state;
  }
  
}
