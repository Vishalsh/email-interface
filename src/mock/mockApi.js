const getUsers = () => JSON.parse(localStorage.getItem('users'));
const getMailboxes = () => JSON.parse(localStorage.getItem('mailboxes'));

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

const getEmails = (url) => {
  const users = getUsers();
  const mailboxes = getMailboxes();

  const userId = parseInt(url.split('/')[2]);
  const mailboxName = url.split('=')[1];

  const receiverEmail = users.find(user => user.id === userId).email;
  const emails = mailboxes
    .find(mailbox => mailbox.name === mailboxName).emails
    .filter(email => email.to === receiverEmail)
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
      data: emails
    });
  });
};

const fetch = (url, data) => {
  if (url.includes('login')) {
    return login(data);
  }

  if (url.includes('users') && url.includes('emails') && url.includes('mailbox')) {
    return getEmails(url);
  }
};

export default fetch;