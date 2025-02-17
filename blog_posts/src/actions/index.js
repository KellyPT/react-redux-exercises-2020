import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // // make sure network call for fetching all posts finishes first before moving to next logic
  // await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));

  // // dont need await keyword here because we dont need to wait for all ids to be fetched; async await syntax doesnt work with forEach statement
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // alternative syntax:
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId') // use the result of getState as first parameter
    .uniq() // call this function on result of map operation
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // retrieve the final result value
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// First refactor: memoize network requests outside of action creator
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
