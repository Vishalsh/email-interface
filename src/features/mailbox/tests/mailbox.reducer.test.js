import loadingStates from 'constants/loadingStates';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED
} from "../mailbox.actionTypes";

import mailboxReducer from '../mailbox.reducer';

describe('mailboxReducer', () => {
  const initialState = {};

  it('return the initial state', () => {
    expect(mailboxReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_EMAILS_SUCCESSFUL', () => {
    const mailbox = 'inbox';
    const emails = [{
      id: 1,
      subject: 'subject 1'
    }, {
      id: 1,
      subject: 'subject 2'
    }];

    const expectedState = mailboxReducer(initialState, { type: GET_EMAILS_SUCCESSFUL, payload: { mailbox, emails } });

    expect(expectedState).toEqual({
      [mailbox]: {
        emails,
        loadingState: loadingStates.LOADED
      }
    });
  });

  it('should handle GET_EMAILS_FAILED', () => {
    const currentState = {
      inbox: {
        emails: [{
          id: 1,
          subject: 'subject 1'
        }, {
          id: 1,
          subject: 'subject 2'
        }],
        loadingState: loadingStates.LOADED
      }
    };

    const expectedState = mailboxReducer(currentState, { type: GET_EMAILS_FAILED, payload: { mailbox: 'sent' } });

    expect(expectedState).toEqual({
      inbox: {
        emails: [{
          id: 1,
          subject: 'subject 1'
        }, {
          id: 1,
          subject: 'subject 2'
        }],
        loadingState: loadingStates.LOADED
      },
      sent: {
        emails: [],
        loadingState: loadingStates.FAILED
      }
    });
  })
});