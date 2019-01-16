import {
  ADD_EMAILS,
} from "../emails.actionTypes";

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
});