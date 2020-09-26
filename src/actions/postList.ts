import { createAction } from 'redux-actions';

export const POST_LIST = 'POST_LIST' as const;
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS' as const;
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE' as const;

export const getPostList = createAction(POST_LIST);
