import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import { INBOX, SENT } from 'constants/mailbox';
import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL,
  TOGGLE_EMAIL_SELECTION,
  CLEAR_SELECTED_EMAILS,
  TOGGLE_CREATE_EMAIL_POPUP
} from "../emails.actionTypes";
import {
  ADD_EMAIL_TO_MAILBOX
} from "features/mailbox/mailbox.actionTypes";
import { status } from 'constants/emails';
import emailsActions from '../emails.actions';
global.alert = jest.fn();

describe('emailsActions', () => {
  const middleWares = [thunkMiddleware];
  const mockStore = configureStore(middleWares);
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        data: {
          email: 'msDhoni@bcci.com'
        }
      }
    })
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
    const email = {
      id: 1,
      subject: 'subject 1',
      status: status.UNREAD
    };
    const updatedEmail = {
      ...email,
      status: status.READ
    };

    it('should dispatch UPDATE_EMAIL_STATUS_SUCCESSFUL if update email is successful', () => {
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

    it('should alert if updating email failed', () => {
      global.alert.mockReset();
      spyOn(http, 'put').and.returnValue(Promise.reject());

      return store.dispatch(emailsActions.updateEmailStatus(email))
        .then(() => {
          expect(http.put).toHaveBeenCalledWith(apiEndPoints.updateEmail(1), updatedEmail);
          expect(global.alert).toHaveBeenCalledWith('Something went wrong while updating the email status. Please try again');
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
    const email = {
      id: 1,
      subject: 'subject 1'
    };

    it('should dispatch ADD_EMAILS, ADD_EMAIL_TO_MAILBOX if sending email is successful', () => {
      spyOn(http, 'post').and.returnValue(Promise.resolve(email));

      const expectedActions = [
        { type: ADD_EMAILS, payload: { emails: { 1: email } } },
        { type: ADD_EMAIL_TO_MAILBOX, payload: { mailbox: SENT, id: email.id } },
        { type: TOGGLE_CREATE_EMAIL_POPUP }
      ];

      return store.dispatch(emailsActions.sendEmail(email))
        .then(() => {
          expect(http.post).toHaveBeenCalledWith(apiEndPoints.sendEmail(), { ...email, from: 'msDhoni@bcci.com' });
          expect(store.getActions()).toEqual(expectedActions);
          expect(global.alert).toHaveBeenCalledWith('Email sent successfully');
        });
    });

    it('should alert if sending email failed', () => {
      global.alert.mockReset();

      spyOn(http, 'post').and.returnValue(Promise.reject());

      return store.dispatch(emailsActions.sendEmail(email))
        .then(() => {
          expect(http.post).toHaveBeenCalledWith(apiEndPoints.sendEmail(), { ...email, from: 'msDhoni@bcci.com' });
          expect(global.alert).toHaveBeenCalledWith('Something went wrong while sending the email. Please try again');
        });
    });
  });

  it('should dispatch TOGGLE_CREATE_EMAIL_POPUP', () => {
    const expectedActions = [{ type: TOGGLE_CREATE_EMAIL_POPUP }];

    store.dispatch(emailsActions.toggleCreateEmailPopup());

    expect(store.getActions()).toEqual(expectedActions);
  });
});