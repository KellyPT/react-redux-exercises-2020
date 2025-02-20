import streams from '../api/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) => {
  // use redux-thunk here
  return async (dispatch, getState) => {
    const { userId } = getState().auth; // go to Redux store and retrieve the info of current signed in user
    const response = await streams.post('/streams', { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data });
    // implement programmatic navigation to get the user back to root route
    history.push('/');
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamId}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (streamId, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${streamId}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({ type: DELETE_STREAM, payload: streamId });
  history.push('/');
};
