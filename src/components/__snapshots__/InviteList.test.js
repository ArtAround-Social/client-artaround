import React from 'react';
import { shallow } from 'enzyme';
import InviteList from '../invites/InviteList';

describe('InviteList component', () => {
  it('renders invites list', () => {
    const wrapper = shallow(
      <InviteList
        invites = { [
          { id: 1234, name: 'art gallery' },
          { id: 4321, name: 'markovco gallery' }
        ] }
        handleReview = {() => { }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
