import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL,
  TOGGLE_EMAIL_SELECTION,
  CLEAR_SELECTED_EMAILS
} from "../emails.actionTypes";
import { status } from 'constants/emails';

import emailsReducer from '../emails.reducer';

describe('emailsReducer', () => {
  const initialState = {};

  it('return the initial state', () => {
    expect(emailsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_EMAILS', () => {
    const currentState = {
      1: {
        id: 1,
        subject: 'subject 1'
      },
      2: {
        id: 1,
        subject: 'subject 2'
      }
    };
    const emails = {
      1: {
        id: 1,
        subject: 'subject 1'
      },
      2: {
        id: 1,
        subject: 'subject 2'
      }
    };

    expect(emailsReducer(currentState, { type: ADD_EMAILS, payload: { emails } })).toEqual({
      ...currentState,
      ...emails
    });
  });

  it('should handle UPDATE_EMAIL_STATUS_SUCCESSFUL', () => {
    const currentState = {
      1: {
        id: 1,
        subject: 'subject 1',
        status: status.UNREAD
      },
      2: {
        id: 2,
        subject: 'subject 2',
        status: status.READ
      }
    };
    const expectedState = {
      1: {
        id: 1,
        subject: 'subject 1',
        status: status.READ
      },
      2: {
        id: 2,
        subject: 'subject 2',
        status: status.READ
      }
    };
    const email = {
      id: 1,
      subject: 'subject 1',
      status: status.READ
    };

    expect(emailsReducer(currentState, { type: UPDATE_EMAIL_STATUS_SUCCESSFUL, payload: { email } }))
      .toEqual(expectedState);
  });

  it('should handle TOGGLE_EMAIL_SELECTION', () => {
    expect(emailsReducer(
      initialState,
      {
        type: TOGGLE_EMAIL_SELECTION,
        payload: { id: 2, checked: true }
      })).toEqual(
      {
        selectedEmails: [2]
      }
    );

    expect(emailsReducer({
        selectedEmails: [1, 2, 3]
      },
      {
        type: TOGGLE_EMAIL_SELECTION,
        payload: { id: 7, checked: true }
      })).toEqual(
      {
        selectedEmails: [1, 2, 3, 7]
      }
    );

    expect(emailsReducer({
        selectedEmails: [1, 2, 3, 7]
      },
      {
        type: TOGGLE_EMAIL_SELECTION,
        payload: { id: 3, checked: false }
      })).toEqual(
      {
        selectedEmails: [1, 2, 7]
      }
    );
  });

  it('should handle TOGGLE_EMAIL_SELECTION', () => {
    expect(emailsReducer({
        selectedEmails: [1, 2, 3]
      },
      {
        type: CLEAR_SELECTED_EMAILS
      })).toEqual(
      {
        selectedEmails: []
      }
    );
  });
});