import fetch from 'mock/mockApi';

const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  throw response.error;
};

const http = {
  get: (url) => {
    return fetch(url, { method: 'GET' })
      .then((response) => handleResponse(response));
  },
  post: (url, data) => {
    return fetch(url, { method: 'POST' }, data)
      .then((response) => handleResponse(response));
  },
  put: (url, data) => {
    return fetch(url, { method: 'PUT' }, data)
      .then((response) => handleResponse(response));
  }
};

export default http;
