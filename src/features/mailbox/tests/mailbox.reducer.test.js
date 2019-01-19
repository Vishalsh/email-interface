import loadingStates from 'constants/loadingStates';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED,
  DELETE_EMAILS_SUCCESSFUL,
  ADD_EMAIL_TO_MAILBOX
} from "../mailbox.actionTypes";
import { INBOX, SENT, TRASH } from 'constants/mailbox';

import mailboxReducer from '../mailbox.reducer';

describe('mailboxReducer', () => {
  const initialState = {
    [INBOX]: {
      emails: [],
      loadingState: loadingStates.AT_REST
    },
    [SENT]: {
      emails: [],
      loadingState: loadingStates.AT_REST
    },
    [TRASH]: {
      emails: [],
      loadingState: loadingStates.AT_REST
    }
  };

  it('return the initial state', () => {
    expect(mailboxReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_EMAILS_SUCCESSFUL', () => {
    const mailbox = 'inbox';
    const emails = [1, 2];

    const expectedState = mailboxReducer(initialState, { type: GET_EMAILS_SUCCESSFUL, payload: { mailbox, emails } });

    expect(expectedState).toEqual({
      ...initialState,
      [mailbox]: {
        emails,
        loadingState: loadingStates.LOADED
      }
    });
  });

  it('should handle GET_EMAILS_FAILED', () => {
    const currentState = {
      ...initialState,
      inbox: {
        emails: [1, 2],
        loadingState: loadingStates.LOADED
      }
    };

    const expectedState = mailboxReducer(currentState, { type: GET_EMAILS_FAILED, payload: { mailbox: 'sent' } });

    expect(expectedState).toEqual({
      ...initialState,
      inbox: {
        emails: [1, 2],
        loadingState: loadingStates.LOADED
      },
      sent: {
        emails: [],
        loadingState: loadingStates.FAILED
      }
    });
  });

  it('should handle DELETE_EMAILS_SUCCESSFUL', () => {
    const mailbox = 'inbox';
    const emails = [1, 2];

    const expectedState = mailboxReducer(initialState, {
      type: DELETE_EMAILS_SUCCESSFUL,
      payload: { mailbox, emails }
    });

    expect(expectedState).toEqual({
      ...initialState,
      [mailbox]: {
        emails,
        loadingState: loadingStates.LOADED
      }
    });
  });

  it('should handle ADD_EMAIL_TO_MAILBOX', () => {
    const mailbox = 'inbox';
    const id = 7;

    const currentState = {
      ...initialState,
      inbox: {
        emails: [1, 2],
        loadingState: loadingStates.LOADED
      }
    };
    const expectedState = mailboxReducer(currentState, { type: ADD_EMAIL_TO_MAILBOX, payload: { mailbox, id } });

    expect(expectedState).toEqual({
      ...initialState,
      [mailbox]: {
        emails: [7, 1, 2],
        loadingState: loadingStates.LOADED
      }
    });
  });
});