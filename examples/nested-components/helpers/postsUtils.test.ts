import { transformRemotePosts } from './postsUtils';

test('should transform post from remote source to form expected by store', () => {
  const mockData = [{
    postId: 1,
    id: 1,
    name: 'title',
    email: 'email',
    body: 'body',
  }];
  const expectedData = [{
    title: 'title',
    paragraphs: ['body', 'email'],
  }];

  expect(transformRemotePosts(mockData)).toEqual(expectedData);
});

test('should handle empty array', () => {
  expect(transformRemotePosts([])).toEqual([]);
});
