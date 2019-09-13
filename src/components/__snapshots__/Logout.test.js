import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../header/Logout';

describe('Logout component', () => {
  it('handles click', () => {
    const wrapper = shallow(
      <Logout
        handleLogout={() => { }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
