import { SET_USER, CLEAR_USER } from './user';
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

export function init() {
  return async (dispatch, _, { apis }) => {
    try {
      const { data: user } = await apis.profile();
      return dispatch(setUser(user));
    } catch (e) {
      console.error(e);
    }
  }
}
