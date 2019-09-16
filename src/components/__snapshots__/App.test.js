import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from '../../containers/HeaderContainer';
import Routes from '../landing_page/Routes';

describe('Header component', () => {
  it('renders header', () => {
    const wrapper = shallow(
      <div>
        <HeaderContainer/>
        <Routes/>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
