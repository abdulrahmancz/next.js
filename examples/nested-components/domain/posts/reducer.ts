import {Actions, Types} from './actions';

export type Post = {
  title: string;
  paragraphs: string[];
}


type PostState = {
  list: Post[],
  errorMessage: string,
  isLoading: boolean,
};

const defaultState = {
  list: [],
  isLoading: false,
  errorMessage: '',
};

export default function posts (state: PostState = defaultState, action: Actions) {
  switch(action.type){
    case Types.STORE_POSTS:
      return {
        ...state,
        list: action.posts,
        isLoading: false,
        errorMessage: '',
      }
    case Types.STORE_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
      case Types.STORE_ERROR:
        return {
          ...state,
          isLoading: false,
          errorMessage: action.errorMessage,
        }
    default:
      return state;
  }
}
