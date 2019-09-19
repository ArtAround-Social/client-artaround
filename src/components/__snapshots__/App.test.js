import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../landing_page/Routes';

describe('Header component', () => {
  it('renders header', () => {
    const wrapper = shallow(
      <div>
        <Routes/>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
