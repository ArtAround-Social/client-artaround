import React from 'react';
import { shallow } from 'enzyme';
import ImageGrid from '../images/ImageGrid';

describe('ImageGrid component', () => {
  it('renders images', () => {
    const wrapper = shallow(
      <ImageGrid
        images = { [
          { id:1, url:'https://unsplash.com/photos/yC-Yzbqy7PY' },
          { id:2, url:'https://unsplash.com/photos/LNRyGwIJr5c' },
          { id:3, url:'https://unsplash.com/photos/6J--NXulQCs' },
          { id:4, url:'https://unsplash.com/photos/pwaaqfoMibI' },
        ] }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
