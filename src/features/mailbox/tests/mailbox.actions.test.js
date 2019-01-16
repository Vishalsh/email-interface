import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED
} from "../mailbox.actionTypes";
import {
  ADD_EMAILS
} from "features/emails/emails.actionTypes";

import mailboxActions from '../mailbox.actions';

describe('mailboxActions', () => {
  const middleWares = [thunkMiddleware];
  const mockStore = configureStore(middleWares);
  let store;
  const user = {
    id: 1,
    name: 'MSD',
    email: 'msDhoni@bcci.com'
  };

  beforeEach(() => {
    store = mockStore({ user: { data: user } })
  });

  describe('getEmails', () => {
    const mailbox = 'inbox';
    const emails = [{
      id: 1,
      subject: 'subject 1'
    }, {
      id: 2,
      subject: 'subject 2'
    }];

    it('should dispatch GET_EMAILS_SUCCESSFUL if fetching emails succeed', () => {
      spyOn(http, 'get').and.returnValue(Promise.resolve(emails));

      const expectedActions = [
        { type: GET_EMAILS_SUCCESSFUL, payload: { mailbox, emails: [1, 2] } },
        {
          type: ADD_EMAILS,
          payload: {
            emails: {
              1: {
                id: 1,
                subject: 'subject 1'
              },
              2: {
                id: 2,
                subject: 'subject 2'
              }
            }
          }
        },
      ];

      return store.dispatch(mailboxActions.getEmails(mailbox))
        .then(() => {
          expect(http.get).toHaveBeenCalledWith(apiEndPoints.getEmails(1, mailbox));
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should dispatch GET_EMAILS_FAILED if fetching emails failed', () => {
      const error = 'something went wrong';

      spyOn(http, 'get').and.returnValue(Promise.reject(error));

      const expectedActions = [
        { type: GET_EMAILS_FAILED, payload: { mailbox } }
      ];

      return store.dispatch(mailboxActions.getEmails(mailbox))
        .then(() => {
          expect(http.get).toHaveBeenCalledWith(apiEndPoints.getEmails(1, mailbox));
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});