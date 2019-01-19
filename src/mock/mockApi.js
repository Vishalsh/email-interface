const getUsers = () => JSON.parse(localStorage.getItem('users'));
const getMailboxes = () => JSON.parse(localStorage.getItem('mailboxes'));
const getEmails = () => JSON.parse(localStorage.getItem('emails'));

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

const mailbox = {
  INBOX: 'inbox',
  SENT: 'sent',
  TRASH: 'trash'
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
      error: 'please enter a valid email and password.'
    });
  })
};

const getMailboxEmails = (url) => {
  const users = getUsers();
  const mailboxes = getMailboxes();
  const emails = getEmails();

  const userEmail = url.split('=')[1];
  const mailboxName = url.split('/')[2];

  const mailboxEmails = mailboxes
    .find(mailbox => mailbox.name === mailboxName).emails;

  let emailList = [];
  if (mailboxName === mailbox.SENT) {
    emailList = emails.filter(email => mailboxEmails.includes(email.id) && email.from === userEmail)
      .map(email => ({
        ...email,
        sender: {
          name: users.find(user => user.email === email.from).name,
          email: email.from
        }
      }));
  } else {
    emailList = emails.filter(email => mailboxEmails.includes(email.id) && (email.to === userEmail || email.cc === userEmail))
      .map(email => ({
        ...email,
        sender: {
          name: users.find(user => user.email === email.from).name,
          email: email.from
        }
      }));
  }

  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: emailList
    });
  });
};

const createEmail = (email) => {
  const emails = getEmails();
  const users = getUsers();

  const sender = users.find(user => user.email === email.from);

  const newInboxEmail = {
    id: emails[emails.length - 1].id + 1,
    ...email,
    dateTime: 'Now',
    status: 'UNREAD',
  };

  const newSentEmail = {
    id: emails[emails.length - 1].id + 2,
    ...email,
    dateTime: 'Now',
    status: 'READ',
  };
  const newEmails = [newInboxEmail, newSentEmail, ...emails];

  localStorage.setItem('emails', JSON.stringify(newEmails));

  const mailboxes = getMailboxes();
  const mailboxesCopy = mailboxes.slice(0);

  const inputMailbox = mailboxesCopy.find(mb => mb.name === mailbox.INBOX);
  inputMailbox.emails = [newInboxEmail.id, ...inputMailbox.emails];

  const sentMailbox = mailboxesCopy.find(mb => mb.name === mailbox.SENT);
  sentMailbox.emails = [newSentEmail.id, ...sentMailbox.emails];

  localStorage.setItem('mailboxes', JSON.stringify(mailboxesCopy));

  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: {
        ...newSentEmail,
        sender: {
          name: sender.name,
          email: sender.email
        }
      }
    });
  });
};

const updateEmail = (email) => {
  const emails = getEmails();
  const emailsCopy = emails.slice(0);

  const emailToUpdate = emailsCopy.find(e => e.id === email.id);
  emailsCopy[emailsCopy.indexOf(emailToUpdate)] = email;

  localStorage.setItem('emails', JSON.stringify(emailsCopy));

  return new Promise((resolve) => {
    resolve({
      status: 200
    });
  });
};

const deleteEmails = (url, emailIds) => {
  const mailboxName = url.split('/')[2];

  const mailboxes = getMailboxes();
  const mailboxesCopy = mailboxes.slice(0);
  const mailboxEmails = mailboxesCopy.find(mailbox => mailbox.name === mailboxName).emails;
  let trashEmails = mailboxesCopy.find(mb => mb.name === mailbox.TRASH).emails;

  emailIds.forEach((id) => {
    const mailboxEmailIndex = mailboxEmails.indexOf(id);
    mailboxEmails.splice(mailboxEmailIndex, 1);
  });

  trashEmails = [...emailIds, ...trashEmails];

  const mailboxIndex = mailboxesCopy.indexOf(mailboxesCopy.find(mailbox => mailbox.name === mailboxName));

  mailboxesCopy[mailboxIndex].emails = mailboxEmails;
  mailboxesCopy[4].emails = trashEmails;

  localStorage.setItem('mailboxes', JSON.stringify(mailboxesCopy));

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

  if (method === methods.GET && url.includes('mailboxes') && url.includes('emails')) {
    return getMailboxEmails(url);
  }

  if (method === methods.POST && url.includes('emails')) {
    return createEmail(data);
  }

  if (method === methods.PUT && url.includes('emails')) {
    return updateEmail(data);
  }

  if (method === methods.DELETE && url.includes('mailboxes') && url.includes('emails')) {
    return deleteEmails(url, data);
  }
};

export default fetch;