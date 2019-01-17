import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED
} from "../user.actionTypes";

jest.mock("react-router-redux", () => {
  return {
    push: () => ({ type: 'push' })
  };
});
global.alert = jest.fn();

import userActions from '../user.actions';

describe('userActions', () => {
  const middleWares = [thunkMiddleware];
  const mockStore = configureStore(middleWares);
  let store;
  const loginDetails = {
    email: 'msd@bcci.com',
    password: '!abcd1234'
  };

  beforeEach(() => {
    store = mockStore({})
  });

  it('should dispatch USER_LOGIN_SUCCESSFUL if user login succeed', () => {
    const user = {
      id: 1,
      name: 'MSD'
    };
    spyOn(http, 'post').and.returnValue(Promise.resolve(user));

    const expectedActions = [
      { type: USER_LOGIN_SUCCESSFUL, payload: user },
      { type: 'push' }
    ];

    return store.dispatch(userActions.login(loginDetails))
      .then(() => {
        expect(http.post).toHaveBeenCalledWith(apiEndPoints.login(), loginDetails);
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch USER_LOGIN_FAILED if user login failed', () => {
    const error = 'something went wrong';

    spyOn(http, 'post').and.returnValue(Promise.reject(error));

    const expectedActions = [{
      type: USER_LOGIN_FAILED,
    }];

    return store.dispatch(userActions.login(loginDetails))
      .then(() => {
        expect(http.post).toHaveBeenCalledWith(apiEndPoints.login(), loginDetails);
        expect(store.getActions()).toEqual(expectedActions);
        expect(global.alert).toHaveBeenCalledWith('something went wrong');
      });
  });
});