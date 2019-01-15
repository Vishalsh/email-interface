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

const mailboxes = [{
  id: 1,
  name: "inbox",
  emails: [{
    id: 1,
    from: 'vkohli@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 1',
    body: 'hi, how are you ?',
    status: 'UNREAD',
    attachments: ['attachment 1', 'attachment 2'],
  }, {
    id: 2,
    from: 'rkharma@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 3,
    from: 'jynks@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD',
    category: 'clients'
  }, {
    id: 4,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 5,
    from: 'rkharma@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD',
    attachments: ['attachment 3'],
    category: 'documents',
  }, {
    id: 6,
    from: 'jynks@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 7,
    from: 'rkharma@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 8,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD',
    category: 'advertising'
  }, {
    id: 9,
    from: 'jynks@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 10,
    from: 'jynks@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 11,
    from: 'rkharma@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 12,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 13,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 14,
    from: 'jynks@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 15,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 16,
    from: 'rkharma@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'UNREAD'
  }, {
    id: 17,
    from: 'bhuvi@bcci.com',
    to: 'msDhoni@bcci.com',
    subject: 'Subject 2',
    body: 'Lorem ipsum dolor sit amet.',
    status: 'READ'
  }]
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