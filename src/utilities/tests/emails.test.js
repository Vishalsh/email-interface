import { hasEmails } from '../emails';

describe('emails', () => {
  it('should check if the emails are present', () => {
    expect(hasEmails({})).toBeFalsy();
    expect(hasEmails({1: { id: 1, subject: 'subject 1' }})).toBeTruthy();
  });
});