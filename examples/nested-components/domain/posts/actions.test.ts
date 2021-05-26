import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import * as actions from './actions';
import * as postUtils from '../../helpers/postsUtils';

const middleware = [thunkMiddleware];
const mockStore = configureMockStore(middleware);

afterEach(() => {
  fetchMock.restore();
})

test('action creator for storing posts', () => {
  const posts = [{
    title: 'test',
    paragraphs: ['body'],
  }];
    const expectedAction = {
      type: actions.Types.STORE_POSTS,
      posts,
    }
    expect(actions.storePosts(posts)).toEqual(expectedAction);
});

test('action creator for storing isLoading state', () => {
    const expectedAction = {
      type: actions.Types.STORE_LOADING,
    }
    expect(actions.storeLoading()).toEqual(expectedAction);
});

test('action creator for storing for storing and error', () => {
  const errorMessage = 'something went wrong';
    const expectedAction = {
      type: actions.Types.STORE_ERROR,
      errorMessage,
    }
    expect(actions.storeError(errorMessage)).toEqual(expectedAction);
});

test('async action for fetching posts - local server', () => {
  fetchMock.getOnce('http://localhost:3001/posts', {
    body: [{
      title: 'test',
      paragraphs: ['body'],
    }],
    headers: { 'content-type': 'application/json' },
  });

  const expectedActions = [
    { type: actions.Types.STORE_LOADING },
    { type: actions.Types.STORE_POSTS, posts: [{
      title: 'test',
      paragraphs: ['body'],
    }]},
  ];
  const store = mockStore({ posts: [] });
  // @ts-ignore
  store.dispatch(actions.getPosts(false) as any).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
test('async action for fetching posts - remote server', () => {


  fetchMock.getOnce('https://jsonplaceholder.typicode.com/comments', {
    body: [{
      "postId": 1,
      "id": 1,
      "name": "title",
      "email": "email",
      "body": "body"
    }],
    headers: { 'content-type': 'application/json' },
  });

  const expectedActions = [
    { type: actions.Types.STORE_LOADING },
    { type: actions.Types.STORE_POSTS, posts: [{
      title: 'title',
      paragraphs: ['body','email'],
    }]},
  ];
  const store = mockStore({ posts: [] });
  store.dispatch(actions.getPosts(true) as any).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
