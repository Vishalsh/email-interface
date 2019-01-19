const getUsers = () => JSON.parse(localStorage.getItem('appUsers'));
const getMailboxes = () => JSON.parse(localStorage.getItem('appMailboxes'));
const getEmails = () => JSON.parse(localStorage.getItem('appEmails'));

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

  const mailboxId = mailboxes.find(mailbox => mailbox.name === mailboxName).id;

  let emailList = [];
  if (mailboxName === mailbox.SENT) {
    emailList = emails.filter(email => email.mailboxId === mailboxId && email.from === userEmail)
      .map(email => ({
        ...email,
        sender: {
          name: users.find(user => user.email === email.from).name,
          email: email.from
        }
      }));
  } else {
    emailList = emails.filter(email => email.mailboxId === mailboxId && (email.to === userEmail || email.cc === userEmail))
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

  let highestId = 1;

  emails.forEach(email => {
    if (email.id > highestId) {
      highestId = email.id
    }
  });

  const newInboxEmail = {
    id: highestId + 1,
    ...email,
    dateTime: 'Now',
    status: 'UNREAD',
    mailboxId: 1
  };

  const newSentEmail = {
    id: highestId + 2,
    ...email,
    dateTime: 'Now',
    status: 'READ',
    mailboxId: 2
  };
  const newEmails = [newInboxEmail, newSentEmail, ...emails];

  localStorage.setItem('appEmails', JSON.stringify(newEmails));

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

  localStorage.setItem('appEmails', JSON.stringify(emailsCopy));

  return new Promise((resolve) => {
    resolve({
      status: 200
    });
  });
};

const deleteEmails = (url, emailIds) => {
  const mailboxName = url.split('/')[2];

  const mailboxes = getMailboxes();
  const emails = getEmails();
  const emailCopy = emails.slice(0);

  let trashMailboxId = mailboxes.find(mb => mb.name === mailbox.TRASH).id;

  if (mailboxName === mailbox.TRASH) {
    emailIds.forEach((id) => {
      const emailIndex = emailCopy.indexOf(emailCopy.find(email => email.id === id));
      emailCopy.splice(emailIndex, 1);
    });
  } else {
    emailIds.forEach((id) => {
      emailCopy.find(email => email.id === id).mailboxId = trashMailboxId;
    });
  }

  localStorage.setItem('appEmails', JSON.stringify(emailCopy));

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