import { createAction } from 'redux-actions';
import { push } from 'react-router-redux'

import http from 'utilities/http';
import apiPaths from 'constants/apiPaths';
import routes from 'constants/routes';
import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED
} from "./user.actionTypes";

const userLoginSuccessful = createAction(USER_LOGIN_SUCCESSFUL);
const userLoginFailed = createAction(USER_LOGIN_FAILED);

const login = (user) => (dispatch) => {
  return http.post(apiPaths.LOGIN, user)
    .then((data) => {
      dispatch(userLoginSuccessful(data));
      dispatch(push(routes.MAILBOX));
    })
    .catch((error) => {
      dispatch(userLoginFailed());
    });
};

export default {
  login
};
