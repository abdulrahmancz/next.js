import { Dispatch } from 'redux';

import {getPostsFromLocalServer, Post} from '../../api/posts';

export const Types = {
  STORE_POSTS: 'posts@STORE_POSTS',
};

type StorePostsAction = {
  readonly type: typeof Types.STORE_POSTS;
  readonly posts: Post[];
}


const storePosts = (posts: Post[]): StorePostsAction => ({
  type: Types.STORE_POSTS,
  posts,
});

export const getPosts = (useLocalServer: boolean) => async (dispatch: Dispatch) => {
  let posts;
  if(useLocalServer) {
    posts = await getPostsFromLocalServer();
  } else {
    posts = [{ title: '', paragraphs: [] }];
  }
  dispatch(storePosts(posts));
}

export type Action = StorePostsAction;
