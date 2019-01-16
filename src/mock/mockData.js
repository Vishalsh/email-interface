const users = [{
  id: 1,
  name: 'MS Dhoni',
  email: 'msDhoni@bcci.com',
  password: '!abcd1234',
  role: 'Wicket Keeper',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}, {
  id: 2,
  name: 'Virat Kohli',
  email: 'vkohli@bcci.com',
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
}, {
  id: 1,
  name: 'MS Dhoni',
  email: 'a@b.c',
  password: 'a',
  role: 'Wicket Keeper',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}];

const emails = [{
  id: 1,
  from: 'vkohli@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'hi, how are you ?',
  status: 'UNREAD',
  dateTime: '6.10 AM'
}, {
  id: 2,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Hey MS, How are you ?',
  status: 'UNREAD',
  dateTime: '8.22 AM'
}, {
  id: 3,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  category: 'clients',
  dateTime: '13 Jan'
}, {
  id: 4,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '13 Jan'
}, {
  id: 5,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  attachments: ['attachment 3'],
  category: 'documents',
  dateTime: '13 Jan'
}, {
  id: 6,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '11 Jan'
}, {
  id: 7,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '11 Jan'
}, {
  id: 8,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  category: 'advertising',
  attachments: ['attachment 1', 'attachment'],
  dateTime: '11 Jan'
}, {
  id: 9,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '11 Jan'
}, {
  id: 10,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '10 Jan'
}, {
  id: 11,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '9 Jan'
}, {
  id: 12,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '9 Jan'
}, {
  id: 13,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '5 Jan'
}, {
  id: 14,
  from: 'jynks@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '5 Jan'
}, {
  id: 15,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '3 Jan'
}, {
  id: 16,
  from: 'rkharma@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '2 Jan'
}, {
  id: 17,
  from: 'bhuvi@bcci.com',
  to: 'msDhoni@bcci.com',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  subject: 'Lorem ipsum dolor sit amet.',
  status: 'READ',
  dateTime: '1 Jan'
}];

const mailboxes = [{
  id: 1,
  name: "inbox",
  emails: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
}, {
  id: 2,
  name: "sent",
  emails: []
}, {
  id: 3,
  name: "important",
  emails: []
}, {
  id: 4,
  name: "drafts",
  emails: []
}, {
  id: 4,
  name: "trash",
  emails: []
}];


localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('mailboxes', JSON.stringify(mailboxes));
localStorage.setItem('emails', JSON.stringify(emails));