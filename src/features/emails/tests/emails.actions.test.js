import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS
} from "../emails.actionTypes";

import emailsActions from '../emails.actions';

describe('emailsActions', () => {
  const middleWares = [thunkMiddleware];
  const mockStore = configureStore(middleWares);
  let store;

  beforeEach(() => {
    store = mockStore({})
  });

  it('should dispatch ADD_EMAILS', () => {
    const emails = [{
      id: 1,
      subject: 'subject 1'
    }, {
      id: 1,
      subject: 'subject 2'
    }];

    const expectedActions = [
      { type: ADD_EMAILS, payload: { emails } },
    ];

    store.dispatch(emailsActions.addEmails({ emails }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch UPDATE_EMAIL_STATUS', () => {
    const expectedActions = [
      { type: UPDATE_EMAIL_STATUS, payload: { id: 2 } },
    ];

    store.dispatch(emailsActions.updateEmailStatus({ id: 2 }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});