import { RemotePost } from '../api/posts';
import { Post } from '../domain/posts/reducer';

export const transformRemotePosts = (remotePosts: RemotePost[]): Post[] => {
  return remotePosts.map(remotePost => ({
    title: remotePost.name,
    paragraphs: [ remotePost.body, remotePost.email ],
  }));
}
