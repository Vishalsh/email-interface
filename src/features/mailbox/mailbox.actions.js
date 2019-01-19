import { createAction } from 'redux-actions';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED,
  DELETE_EMAILS_SUCCESSFUL,
  ADD_EMAIL_TO_MAILBOX
} from "./mailbox.actionTypes";
import { TRASH } from 'constants/mailbox';
import emailActions from "features/emails/emails.actions";

const getEmailsSuccessful = createAction(GET_EMAILS_SUCCESSFUL);
const getEmailsFailed = createAction(GET_EMAILS_FAILED);
const deleteEmailSuccessful = createAction(DELETE_EMAILS_SUCCESSFUL);
const addEmailToMailbox = createAction(ADD_EMAIL_TO_MAILBOX);

const getEmails = (mailbox) => (dispatch, getState) => {
  const { user } = getState();

  return http.get(apiEndPoints.getEmails(user.data.email, mailbox))
    .then((emails) => {
      dispatch(emailActions.addEmails({
        emails: emails.reduce((emailsObject, email) => {
          return {
            ...emailsObject,
            [email.id]: email
          }
        }, {})
      }));
      dispatch(getEmailsSuccessful({
        mailbox, emails: emails.map(email => email.id)
      }));
    })
    .catch(() => {
      dispatch(getEmailsFailed({ mailbox }));
    });
};

const deleteEmails = (mailboxName) => (dispatch, getState) => {
  const { emails, mailbox } = getState();

  return http.delete(apiEndPoints.deleteEmails(mailboxName), emails.selectedEmails)
    .then(() => {
      const mailboxEmails = mailbox[mailboxName].emails.slice(0);

      emails.selectedEmails.forEach((id) => {
        const index = mailboxEmails.indexOf(id);
        mailboxEmails.splice(index, 1);
      });

      if (mailboxName === TRASH) {
        dispatch(deleteEmailSuccessful({ mailbox: TRASH, emails: mailboxEmails }));
      } else {
        let trashEmails = mailbox[TRASH].emails.slice(0);

        trashEmails = [...emails.selectedEmails, ...trashEmails];

        dispatch(deleteEmailSuccessful({ mailbox: mailboxName, emails: mailboxEmails }));
        dispatch(deleteEmailSuccessful({ mailbox: TRASH, emails: trashEmails }));
      }

      dispatch(emailActions.clearSelectedEmails());
    })
    .catch(() => {
      window.alert('Something went wrong while deleting the emails. Please try again');
    });
};


export default {
  getEmails,
  deleteEmails,
  addEmailToMailbox
};
