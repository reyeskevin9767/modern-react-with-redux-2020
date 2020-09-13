import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Cannot use async and await in action creator,
// creator must return a regular js function

// By the time action gets to the reducer, we won't have fetched our data

// Solution
// Redux Thunk -> Allows for action creators to return functions

// Redux Thunk (and other middleware) will allow you to delay the dispatching of the action
// until the request fully resolves. After it resolves, the action will be sent back into the Redux Thunk
// pipeline again at which point it should be a plain action object
// and dispatched to the Redux store as we would typically expect.

// If we don't call dispatch(fetchPosts()), like only call fetchPosts(),
// then the function returned from fetchPosts is not going to be in the
// redux dispatch pipeline and not get the data from the inner function dispatch

// The pipeline is going to be: dispatch fetchPosts function,
// then dispatch the inner function of fetchPosts,
// then dispatch the final object.

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Multiple requests problem
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// };

// Memoize Approach, problem cannot search user again
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// // Call once if data is the same
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
