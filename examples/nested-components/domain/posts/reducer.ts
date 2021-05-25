import {Post} from '../../api/posts';
import {Action, Types} from './actions';

type PostState = {
  list: Post[],
};

const defaultState = {
  list: [],
};

export default function posts (state: PostState = defaultState, action: Action) {
  switch(action.type){
    case Types.STORE_POSTS:
      return {
        ...state,
        list: action.posts,
      }
    default:
      return state;
  }
}
