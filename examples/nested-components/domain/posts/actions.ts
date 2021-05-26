import { Dispatch } from 'redux';

import { getPostsFromLocalServer, getPostsFromRemoteServer, RemotePost } from '../../api/posts';
import { Post } from './reducer';
import { transformRemotePosts } from '../../helpers/postsUtils';

export const Types = {
  STORE_POSTS: 'posts@STORE_POSTS',
  STORE_ERROR: 'posts@STORE_ERROR',
  STORE_LOADING: 'posts@STORE_LOADING',
} as const;

type StorePostsAction = {
  type: typeof Types.STORE_POSTS;
  posts: Post[];
}

export const storePosts = (posts: Post[]): StorePostsAction => ({
  type: Types.STORE_POSTS,
  posts,
});

type StoreErrorAction = {
  type: typeof Types.STORE_ERROR,
  errorMessage: string
}

export const storeError = (errorMessage: string): StoreErrorAction => ({
  type: Types.STORE_ERROR,
  errorMessage,
});

type StoreLoadingAction = {
  type: typeof Types.STORE_LOADING
}

export const storeLoading = (): StoreLoadingAction => ({
  type: Types.STORE_LOADING
});

export const getPosts = (useRemoteServer: boolean) => async (dispatch: Dispatch) => {
  dispatch(storeLoading());
  let posts: Post[];
  try{
    if(useRemoteServer) {
      posts = transformRemotePosts(await getPostsFromRemoteServer());
    } else {
      posts = await getPostsFromLocalServer();
    }
    return dispatch(storePosts(posts));
  } catch(e) {
    return dispatch(storeError('Failed to fetch the posts'));
  }
}

export type Actions =
| StorePostsAction
| StoreErrorAction
| StoreLoadingAction;
