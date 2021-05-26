import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import HomePage from './index';
import Post from '../components/post';

const middleware = [thunkMiddleware];
const mockStore = configureMockStore(middleware);

test('component renders posts when they are fetched', () => {
  const store = mockStore({ posts: {
    list: [
      {title: 'test1', paragraphs: ['body']},
      {title: 'test2', paragraphs: ['body2']},
    ],
    isLoading: false,
    errorMessage: '',
  } });

  const wrapper = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  expect(wrapper.find(Post).length).toBe(2);
});

test('component renders posts with loading overlay when new data are being fetched', () => {
  const store = mockStore({ posts: {
    list: [
      {title: 'test1', paragraphs: ['body']},
      {title: 'test2', paragraphs: ['body2']},
    ],
    isLoading: true,
    errorMessage: '',
  } });

  const wrapper = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  expect(wrapper.find(Post).length).toBe(2);
  expect(wrapper.find('div.loading').length).toBe(1);
  expect(wrapper.find('div.error').length).toBe(0);
});

test('component renders posts when they are fetched', () => {
  const store = mockStore({ posts: {
    list: [
      {title: 'test1', paragraphs: ['body']},
      {title: 'test2', paragraphs: ['body2']},
    ],
    isLoading: false,
    errorMessage: 'Something something something ERROR!',
  } });

  const wrapper = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  expect(wrapper.find(Post).length).toBe(2);
  expect(wrapper.find('div.loading').length).toBe(0);
  expect(wrapper.find('div.error').length).toBe(1);
  expect(wrapper.find('div.error').contains('Something something something ERROR!')).toBe(true);
});
