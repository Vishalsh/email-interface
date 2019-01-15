const root = '/';

const apiEndPoints = {
  login: () => `${root}login`,
  getEmails: (userId, mailbox) => `${root}users/${userId}/emails?mailbox=${mailbox}`
};

export default apiEndPoints;