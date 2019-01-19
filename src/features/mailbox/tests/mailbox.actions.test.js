import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED,
  DELETE_EMAILS_SUCCESSFUL,
  ADD_EMAIL_TO_MAILBOX
} from "../mailbox.actionTypes";
import {
  ADD_EMAILS,
  CLEAR_SELECTED_EMAILS
} from "features/emails/emails.actionTypes";
import { INBOX, TRASH, SENT } from 'constants/mailbox';
global.alert = jest.fn();

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
        { type: GET_EMAILS_SUCCESSFUL, payload: { mailbox: INBOX, emails: [1, 2] } }
      ];

      return store.dispatch(mailboxActions.getEmails(INBOX))
        .then(() => {
          expect(http.get).toHaveBeenCalledWith(apiEndPoints.getEmails('msDhoni@bcci.com', INBOX));
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should dispatch GET_EMAILS_FAILED if fetching emails failed', () => {
      const error = 'something went wrong';

      spyOn(http, 'get').and.returnValue(Promise.reject(error));

      const expectedActions = [
        { type: GET_EMAILS_FAILED, payload: { mailbox: SENT } }
      ];

      return store.dispatch(mailboxActions.getEmails(SENT))
        .then(() => {
          expect(http.get).toHaveBeenCalledWith(apiEndPoints.getEmails('msDhoni@bcci.com', SENT));
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });


  describe('deleteEmails', () => {
    beforeEach(() => {
      store = mockStore({
        emails: { selectedEmails: [3, 5, 7] },
        mailbox: {
          inbox: {
            emails: [1, 2, 3, 4, 5, 6, 7]
          },
          trash: {
            emails: [8, 9]
          }
        }
      })
    });

    describe('when deleting emails succeed', () => {
      it('should dispatch DELETE_EMAILS_SUCCESSFUL for selected mailbox and trash mailbox when selected mailbox is not trash', () => {
        const mailbox = 'inbox';

        spyOn(http, 'delete').and.returnValue(Promise.resolve());

        const expectedActions = [
          { type: DELETE_EMAILS_SUCCESSFUL, payload: { mailbox, emails: [1, 2, 4, 6] } },
          { type: DELETE_EMAILS_SUCCESSFUL, payload: { mailbox: TRASH, emails: [3, 5, 7, 8, 9] } },
          { type: CLEAR_SELECTED_EMAILS }
        ];

        return store.dispatch(mailboxActions.deleteEmails(mailbox))
          .then(() => {
            expect(http.delete).toHaveBeenCalledWith(apiEndPoints.deleteEmails(mailbox), [3, 5, 7]);
            expect(store.getActions()).toEqual(expectedActions);
          });
      });

      it('should dispatch DELETE_EMAILS_SUCCESSFUL for trash mailbox only when selected mailbox is trash', () => {
        store = mockStore({
          emails: { selectedEmails: [8] },
          mailbox: {
            inbox: {
              emails: [1, 2, 3, 4, 5, 6, 7]
            },
            trash: {
              emails: [8, 9]
            }
          }
        });

        const mailbox = 'trash';

        spyOn(http, 'delete').and.returnValue(Promise.resolve());

        const expectedActions = [
          { type: DELETE_EMAILS_SUCCESSFUL, payload: { mailbox: TRASH, emails: [9] } },
          { type: CLEAR_SELECTED_EMAILS }
        ];

        return store.dispatch(mailboxActions.deleteEmails(mailbox))
          .then(() => {
            expect(http.delete).toHaveBeenCalledWith(apiEndPoints.deleteEmails(mailbox), [8]);
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });

    it('should alert if deleting email failed', () => {
      const mailbox = 'inbox';

      spyOn(http, 'delete').and.returnValue(Promise.reject());

      return store.dispatch(mailboxActions.deleteEmails(mailbox))
        .then(() => {
          expect(http.delete).toHaveBeenCalledWith(apiEndPoints.deleteEmails(mailbox), [3, 5, 7]);
          expect(global.alert).toHaveBeenCalledWith('Something went wrong while deleting the emails. Please try again');
        });
    });
  });

  it('should dispatch ADD_EMAIL_TO_MAILBOX', () => {
    const expectedActions = [{ type: ADD_EMAIL_TO_MAILBOX, payload: { mailbox: INBOX, id: 5 } }];

    store.dispatch(mailboxActions.addEmailToMailbox({ mailbox: INBOX, id: 5 }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});