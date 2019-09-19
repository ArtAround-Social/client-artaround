import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header/Header';

describe('Header component', () => {
  it('renders header', () => {
    const wrapper = shallow(
      <Header
        userType = 'Artist'
        handleLogout = {() => { }}
        name = 'vasily'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
