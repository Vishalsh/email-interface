import loadingStates from 'constants/loadingStates';
import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED
} from "../user.actionTypes";

import userReducer from '../user.reducer';

describe('userReducer', () => {
  const initialState = {
    loadingState: loadingStates.AT_REST,
    data: {}
  };

  it('return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle USER_LOGIN_SUCCESSFUL', () => {
    const user = { id: 1, name: 'MSD' };

    const expectedState = userReducer(initialState, { type: USER_LOGIN_SUCCESSFUL, payload: user });

    expect(expectedState).toEqual({
      loadingState: loadingStates.LOADED,
      data: user
    });
  });

  it('should handle USER_LOGIN_SUCCESSFUL', () => {
    const expectedState = userReducer(initialState, { type: USER_LOGIN_FAILED });

    expect(expectedState).toEqual({
      loadingState: loadingStates.FAILED,
      data: {}
    });
  })
});