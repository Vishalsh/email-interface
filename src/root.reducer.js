import { combineReducers } from "redux";

import user from 'features/user/user.reducer.js';
import mailbox from 'features/mailbox/mailbox.reducer.js';

export default combineReducers({
  user,
  mailbox
});
