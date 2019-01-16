import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  ADD_EMAILS,
} from "../emails.actionTypes";

import emailsActions from '../emails.actions';

describe('emailsActions', () => {
  const middleWares = [thunkMiddleware];
  const mockStore = configureStore(middleWares);
  let store;

  beforeEach(() => {
    store = mockStore({})
  });

  describe('addEmails', () => {
    const emails = [{
      id: 1,
      subject: 'subject 1'
    }, {
      id: 1,
      subject: 'subject 2'
    }];

    it('should dispatch ADD_EMAILS', () => {
      const expectedActions = [
        { type: ADD_EMAILS, payload: { emails } },
      ];

      store.dispatch(emailsActions.addEmails({ emails }))

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});