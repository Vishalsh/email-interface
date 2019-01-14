const login = () => {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: {
        id: 1,
        name: 'MSD'
      }
    });
  });
  //
  // return new Promise((resolve) => {
  //   resolve({
  //     status: 401,
  //     error: 'please enter a matching email and password'
  //   });
  // })
};

const apiMethods = {
  login
};

const fetch = (url, data) => apiMethods[url]();

export default fetch;