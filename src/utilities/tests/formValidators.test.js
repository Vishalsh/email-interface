import { isEmailValid } from '../formValidators';

describe('formValidators', () => {
  it('should validates the email', () => {
    expect(isEmailValid(undefined)).toBeFalsy();
    expect(isEmailValid(null)).toBeFalsy();
    expect(isEmailValid('')).toBeFalsy();
    expect(isEmailValid('abcd')).toBeFalsy();
    expect(isEmailValid('a.b.com')).toBeFalsy();
    expect(isEmailValid('a@b@co')).toBeFalsy();
    expect(isEmailValid('a@b.com')).toBeTruthy();
    expect(isEmailValid('foo@bar.com')).toBeTruthy();
    expect(isEmailValid('foo@bar.in')).toBeTruthy();
  });
});