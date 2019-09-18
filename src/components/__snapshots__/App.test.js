import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from '../../containers/HeaderContainer';

describe('Header component', () => {
  it('renders header', () => {
    const wrapper = shallow(
      <div>
        <HeaderContainer/>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
