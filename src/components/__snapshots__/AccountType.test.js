import React from 'react';
import { shallow } from 'enzyme';
import AccountType from '../header/AccountType';


describe('AccountType component', () => {
  it('renders account type', () => {
    const wrapper = shallow(
      <AccountType
        user_type = 'Artist'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
