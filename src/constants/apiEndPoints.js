const root = '/';

const apiEndPoints = {
  login: () => `${root}login`,
  getEmails: (userId, mailbox) => `${root}users/${userId}/mailboxes/${mailbox}/emails`
};

export default apiEndPoints;