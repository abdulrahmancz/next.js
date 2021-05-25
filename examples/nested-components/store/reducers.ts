import { combineReducers } from 'redux';

import posts from '../domain/posts/reducer';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
