const getUsers = () => JSON.parse(localStorage.getItem('users'));
const getMailboxes = () => JSON.parse(localStorage.getItem('mailboxes'));
const getEmails = () => JSON.parse(localStorage.getItem('emails'));

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};

const login = (user) => {
  const users = getUsers();
  const matchingUser = users.find(u => u.email === user.email && u.password === user.password);

  if (matchingUser) {
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: matchingUser
      });
    });
  }

  return new Promise((resolve) => {
    resolve({
      status: 401,
      error: 'please enter a matching email and password'
    });
  })
};

const getMailboxEmails = (url) => {
  const users = getUsers();
  const mailboxes = getMailboxes();
  const emails = getEmails();

  const userId = parseInt(url.split('/')[2]);
  const mailboxName = url.split('/')[4];

  const receiverEmail = users.find(user => user.id === userId).email;
  const mailboxEmails = mailboxes
    .find(mailbox => mailbox.name === mailboxName).emails;

  const emailList = emails.filter(email => email.to === receiverEmail && mailboxEmails.includes(email.id))
    .map(email => ({
      ...email,
      sender: {
        name: users.find(user => user.email === email.from).name,
        email: email.from
      }
    }));

  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: emailList
    });
  });
};

const updateEmail = (email) => {
  const emails = getEmails();
  const emailsCopy = emails.slice(0);

  emailsCopy.find(e => e.id === email.id).status = 'READ';

  localStorage.setItem('emails', JSON.stringify(emailsCopy));

  return new Promise((resolve) => {
    resolve({
      status: 200
    });
  });
};

const fetch = (url, { method }, data) => {
  if (url.includes('login')) {
    return login(data);
  }

  if (url.includes('users') && url.includes('mailboxes') && url.includes('emails')) {
    return getMailboxEmails(url);
  }

  if (method === methods.PUT && url.includes('emails')) {
    return updateEmail(data);
  }
};

export default fetch;