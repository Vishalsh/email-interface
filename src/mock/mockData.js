const appUsers = [{
  id: 1,
  name: 'MS Dhoni',
  email: 'msDhoni@bcci.com',
  password: '!abcd1234',
  role: 'Wicket Keeper',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}, {
  id: 2,
  name: 'Virat Kohli',
  email: 'vKohli@bcci.com',
  password: '!abcd1234',
  role: 'Captain',
  avatar: 'http://s.ndtvimg.com/images/entities/120/virat-kohli-967.png'
}, {
  id: 3,
  name: 'Ajinkya Rahane',
  email: 'jynks@bcci.com',
  password: '!abcd1234',
  role: 'Batsmen',
  avatar: ''
}, {
  id: 4,
  name: 'Rohit Sharma',
  email: 'rkharma@bcci.com',
  password: '!abcd1234',
  role: 'Batsmen',
  avatar: ''
}, {
  id: 5,
  name: 'Bhuvneshvar Kumar',
  email: 'bhuvi@bcci.com',
  password: '!abcd1234',
  role: 'Bowler',
  avatar: ''
}];

const appEmails = [{
  id: 1,
  from: 'vKohli@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'hi, how are you ?',
  status: 'UNREAD',
  dateTime: '6.10 AM',
  mailboxId: 1
}, {
  id: 2,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Hey MS, How are you ?',
  status: 'UNREAD',
  dateTime: '8.22 AM',
  mailboxId: 1
}, {
  id: 3,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  category: 'clients',
  dateTime: 'Jan 13',
  mailboxId: 1
}, {
  id: 4,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 13',
  mailboxId: 1
}, {
  id: 5,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  attachments: ['attachment 3'],
  category: 'documents',
  dateTime: 'Jan 13'
}, {
  id: 6,
  from: 'jynks@bcci.com',
  to: 'vKohli@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 11',
  mailboxId: 1
}, {
  id: 7,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 11',
  mailboxId: 1
}, {
  id: 8,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  category: 'advertising',
  attachments: ['attachment 1', 'attachment'],
  dateTime: 'Jan 11'
}, {
  id: 9,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 11',
  mailboxId: 1
}, {
  id: 10,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 10',
  mailboxId: 1
}, {
  id: 11,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 9',
  mailboxId: 1
}, {
  id: 12,
  from: 'bhuvi@bcci.com',
  to: 'vKohli@bcci.com',
  cc: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 9',
  mailboxId: 1
}, {
  id: 13,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 5',
  mailboxId: 1
}, {
  id: 14,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 5',
  mailboxId: 1
}, {
  id: 15,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 3',
  mailboxId: 1
}, {
  id: 16,
  from: 'rkharma@bcci.com',
  to: 'vKohli@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 2',
  mailboxId: 1
}, {
  id: 17,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: 'Jan 1',
  mailboxId: 1
}];

const appMailboxes = [{
  id: 1,
  name: "inbox"
}, {
  id: 2,
  name: "sent"
}, {
  id: 3,
  name: "important"
}, {
  id: 4,
  name: "drafts"
}, {
  id: 5,
  name: "trash"
}];
//
// (function reset() {
//   localStorage.removeItem('appUsers');
//   localStorage.removeItem('appMailboxes');
//   localStorage.removeItem('appEmails');
// })();

if (!localStorage.getItem('appUsers')) {
  localStorage.setItem('appUsers', JSON.stringify(appUsers)); // just adding app to avoid conflict.
}
if (!localStorage.getItem('appMailboxes')) {
  localStorage.setItem('appMailboxes', JSON.stringify(appMailboxes));
}
if (!localStorage.getItem('appEmails')) {
  localStorage.setItem('appEmails', JSON.stringify(appEmails));
}
