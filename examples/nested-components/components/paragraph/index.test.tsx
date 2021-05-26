import React from 'react';
import {shallow} from 'enzyme';

import P from './index';

test('component renders the text correctly', () => {
    const component = shallow(<P>test</P>);
    expect(component.contains('test')).toBe(true);
});

test('component handles rendering nothing', () => {
  const component = shallow(<P></P>);
  expect(component.children()).toHaveLength(0);
});

test('component handles its content as text', () => {
  const component = shallow(<P>"<div>inner html</div><div>inner html</div>"</P>);
  expect(component.children()).toHaveLength(1);
});
