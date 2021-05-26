type LocalPost = {
  title: string;
  paragraphs: string[];
}

export type RemotePost = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export const getPostsFromLocalServer = () => {
  return fetch('http://localhost:3001/posts').then(res => res.json() as unknown as LocalPost[]);
}

export const getPostsFromRemoteServer = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json() as unknown as RemotePost[]);
}
