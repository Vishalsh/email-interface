import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import { INBOX, SENT } from 'constants/mailbox';
import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL,
  TOGGLE_EMAIL_SELECTION,
  CLEAR_SELECTED_EMAILS
} from "../emails.actionTypes";
import {
  ADD_EMAIL_TO_MAILBOX
} from "features/mailbox/mailbox.actionTypes";
import { status } from 'constants/emails';
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

  describe('updateEmailStatus', () => {
    it('should dispatch UPDATE_EMAIL_STATUS_SUCCESSFUL if update email is successful', () => {
      const email = {
        id: 1,
        subject: 'subject 1',
        status: status.UNREAD
      };
      const updatedEmail = {
        ...email,
        status: status.READ
      };

      spyOn(http, 'put').and.returnValue(Promise.resolve());

      const expectedActions = [
        { type: UPDATE_EMAIL_STATUS_SUCCESSFUL, payload: { email: updatedEmail } },
      ];

      return store.dispatch(emailsActions.updateEmailStatus(email))
        .then(() => {
          expect(http.put).toHaveBeenCalledWith(apiEndPoints.updateEmail(1), updatedEmail);
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  it('should dispatch TOGGLE_EMAIL_SELECTION', () => {
    const expectedActions = [
      { type: TOGGLE_EMAIL_SELECTION, payload: { id: 2, checked: true } },
    ];

    store.dispatch(emailsActions.toggleEmailSelection({ id: 2, checked: true }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch CLEAR_SELECTED_EMAILS', () => {
    const expectedActions = [{ type: CLEAR_SELECTED_EMAILS }];

    store.dispatch(emailsActions.clearSelectedEmails());

    expect(store.getActions()).toEqual(expectedActions);
  });

  describe('sendEmail', () => {
    it('should dispatch ADD_EMAILS, ADD_EMAIL_TO_MAILBOX if sending email is successful', () => {
      const email = {
        id: 1,
        subject: 'subject 1'
      };

      spyOn(http, 'post').and.returnValue(Promise.resolve(email));

      const expectedActions = [
        { type: ADD_EMAILS, payload: { emails: [{ 1: email }] } },
        { type: ADD_EMAIL_TO_MAILBOX, payload: { mailbox: INBOX, id: email.id } },
        { type: ADD_EMAIL_TO_MAILBOX, payload: { mailbox: SENT, id: email.id } },
      ];

      return store.dispatch(emailsActions.sendEmail(email))
        .then(() => {
          expect(http.post).toHaveBeenCalledWith(apiEndPoints.sendEmail(), email);
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

});