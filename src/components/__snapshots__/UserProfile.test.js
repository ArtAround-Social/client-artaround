import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../header/UserProfile';

describe('UserProfile component', () => {
  it('renders name', () => {
    const wrapper = shallow(
      <UserProfile name='Vasily Markov'/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
