import { SENT } from 'constants/mailbox';
const root = '/';

const apiEndPoints = {
  login: () => `${root}login`,
  getEmails: (userEmail, mailbox) => {
    if (mailbox === SENT) {
      return `${root}mailboxes/${mailbox}/emails?from=${userEmail}`
    }
    return `${root}mailboxes/${mailbox}/emails?to=${userEmail}`
  },
  updateEmail: (id) => `${root}emails/${id}`,
  deleteEmails: (mailbox) => `${root}mailboxes/${mailbox}/emails`,
  sendEmail: () => `${root}emails`
};

export default apiEndPoints;