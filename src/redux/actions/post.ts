import { createAction } from 'redux-actions';

export const READ_POST = 'READ_POST';
export const READ_POST_SUCCESS = 'READ_POST_SUCCESS';
export const READ_POST_FAILURE = 'READ_POST_FAILURE';
export const RESET_POST = 'RESET_POST';

export const readPost = createAction(READ_POST, (postId: string) => postId);
export const resetPost = createAction(RESET_POST);
