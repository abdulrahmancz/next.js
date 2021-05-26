import { RootState } from '../../store/reducers';

export const posts = (state: RootState) => state.posts.list;
export const isLoading = (state: RootState) => state.posts.isLoading;
export const errorMessage = (state: RootState) => state.posts.errorMessage;
