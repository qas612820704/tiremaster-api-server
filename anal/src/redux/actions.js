import { SET_USER, CLEAR_USER } from './user';
import * as apis from '../apis';

export function setUser(user = {}) {
  return {
    type: SET_USER,
    payload: user,
  }
}
export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function login(user = {}) {
  return async dispatch => {
    await apis.login(user);
    const data = await apis.profile();
    return dispatch(setUser(data.payload.profile));
  };
}

export function init() {
  return async dispatch => {
    try {
      const { data: user } = await apis.profile();
      return dispatch(setUser(user));
    } catch (e) {
      console.error(e);
    }
  }
}
