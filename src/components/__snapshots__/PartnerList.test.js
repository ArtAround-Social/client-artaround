import React from 'react';
import { shallow } from 'enzyme';
import PartnersList from '../partners/PartnersList';

describe('PartnersList component', () => {
  it('renders partners list', () => {
    const wrapper = shallow(
      <PartnersList
        partners = { [
          { id: 12434, name: 'pavel artist' },
          { id: 43241, name: 'jon artists' }
        ] }
        goToPofile = {() => { }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
