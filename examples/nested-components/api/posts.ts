export type Post = {
  title: string;
  paragraphs: string[];
}

export const getPostsFromLocalServer = async () => {
  return fetch('http://localhost:3001/posts').then(res => res.json() as unknown as Post[]);
}
