import React from 'react';
import {shallow} from 'enzyme';

import Post from './index';

test('component renders the text correctly', () => {
  const component = shallow(<Post title="test title">test content</Post>);
  expect(component.children()).toHaveLength(2);
});

test('component handles rendering nothing', () => {
  const component = shallow(<Post title="test title"></Post>);
  expect(component.children()).toHaveLength(1);
});

export {};
