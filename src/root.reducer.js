import { combineReducers } from "redux";

import userReducer from 'features/user/user.reducer.js';
import mailboxReducer from 'features/mailbox/mailbox.reducer.js';
import emailsReducer from 'features/emails/emails.reducer.js';

export default combineReducers({
  user: userReducer,
  mailbox: mailboxReducer,
  emails: emailsReducer
});
