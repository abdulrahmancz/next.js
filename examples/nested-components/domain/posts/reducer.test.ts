import reducer from './reducer';
import { Types } from './actions';

test(`should handle ${Types.STORE_POSTS} after loading`, () => {
  const initState = {
    list: [],
    isLoading: true,
    errorMessage: '',
  };
  const posts = [{
    title: 'test',
    paragraphs: ['body'],
  }];
  const action = {
    type: Types.STORE_POSTS,
    posts,
  };

  expect(reducer(initState, action)).toEqual({
    list: posts,
    isLoading: false,
    errorMessage: '',
  })
});

test(`should handle ${Types.STORE_POSTS} after an error`, () => {
  const initState = {
    list: [],
    isLoading: false,
    errorMessage: 'some error happened',
  };
  const posts = [{
    title: 'test',
    paragraphs: ['body'],
  }];
  const action = {
    type: Types.STORE_POSTS,
    posts,
  };

  expect(reducer(initState, action)).toEqual({
    list: posts,
    isLoading: false,
    errorMessage: '',
  })
});

test(`should handle ${Types.STORE_LOADING}`, () => {
  const initState = {
    list: [],
    isLoading: false,
    errorMessage: '',
  };
  const action = {
    type: Types.STORE_LOADING,
  };

  expect(reducer(initState, action)).toEqual({
    list: [],
    isLoading: true,
    errorMessage: '',
  })
});

test(`should handle ${Types.STORE_LOADING} after an error`, () => {
  const initState = {
    list: [],
    isLoading: false,
    errorMessage: 'some error happened',
  };
  const action = {
    type: Types.STORE_LOADING,
  };

  expect(reducer(initState, action)).toEqual({
    list: [],
    isLoading: true,
    errorMessage: '',
  });
});

test(`should handle ${Types.STORE_ERROR}`, () => {
  const initState = {
    list: [],
    isLoading: false,
    errorMessage: 'some error happened',
  };
  const errorMessage = 'SOmething went south';
  const action = {
    type: Types.STORE_ERROR,
    errorMessage,
  };

  expect(reducer(initState, action)).toEqual({
    list: [],
    isLoading: false,
    errorMessage: errorMessage,
  });
});

test(`should handle ${Types.STORE_ERROR} after loading`, () => {
  const initState = {
    list: [],
    isLoading: true,
    errorMessage: 'some error happened',
  };
  const errorMessage = 'SOmething went south';
  const action = {
    type: Types.STORE_ERROR,
    errorMessage,
  };

  expect(reducer(initState, action)).toEqual({
    list: [],
    isLoading: false,
    errorMessage: errorMessage,
  });
});
