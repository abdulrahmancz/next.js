import * as selectors from './selectors';

const mockState: any = {
  posts: {
    list: [
      { title: '', pharagraphs: ['body'], },
    ],
    isLoading: false,
    errorMessage: '',
  },
};

test('should get Posts from state', () => {
  expect(selectors.posts(mockState))
    .toEqual([{ title: '', pharagraphs: ['body'], }]);
});

test('should get IsLoading from state', () => {
  expect(selectors.isLoading(mockState))
    .toEqual(false);
});

test('should get ErrorMessage from state', () => {
  expect(selectors.errorMessage(mockState))
    .toEqual('');
});
