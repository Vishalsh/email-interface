import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL
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
});