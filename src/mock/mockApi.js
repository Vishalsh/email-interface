const getUsers = () => JSON.parse(localStorage.getItem('users'));


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

const apiMethods = {
  login
};

const fetch = (url, data) => apiMethods[url](data);

export default fetch;