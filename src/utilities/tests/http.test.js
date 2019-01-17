import http from '../http';

import * as mockApi from 'mock/mockApi';


describe('http', () => {
  describe('get', () => {
    const getUrl = '/some-get-url';

    it('should handle the success response of a get request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 200,
          data: 'some data'
        })
      }));

      http.get(getUrl)
        .then((data) => {
          expect(mockApi.default).toHaveBeenCalledWith(getUrl, { method: 'GET' });
          expect(data).toEqual('some data');
          done();
        });
    });

    it('should handle the failure response of a get request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 401,
          error: 'some error'
        })
      }));

      http.get(getUrl)
        .catch((error) => {
          expect(mockApi.default).toHaveBeenCalledWith(getUrl, { method: 'GET' });
          expect(error).toEqual('some error');
          done();
        });
    });
  });

  describe('post', () => {
    const postUrl = '/some-post-url';
    const postData = { foo: 'bar' };

    it('should handle the success response of a post request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 200,
          data: 'some data'
        })
      }));

      http.post(postUrl, postData)
        .then((data) => {
          expect(mockApi.default).toHaveBeenCalledWith(postUrl, { method: 'POST' }, postData);
          expect(data).toEqual('some data');
          done();
        });
    });

    it('should handle the failure response of a post request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 400,
          error: 'some error'
        })
      }));

      http.post(postUrl, postData)
        .catch((error) => {
          expect(mockApi.default).toHaveBeenCalledWith(postUrl, { method: 'POST' }, postData);
          expect(error).toEqual('some error');
          done();
        });
    });
  });

  describe('put', () => {
    const putUrl = '/some-put-url';
    const putData = { foo: 'bar' };

    it('should handle the success response of a put request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 200,
          data: 'some data'
        })
      }));

      http.put(putUrl, putData)
        .then((data) => {
          expect(mockApi.default).toHaveBeenCalledWith(putUrl, { method: 'PUT' }, putData);
          expect(data).toEqual('some data');
          done();
        });
    });

    it('should handle the failure response of a put request', (done) => {
      spyOn(mockApi, 'default').and.returnValue(new Promise((resolve) => {
        resolve({
          status: 401,
          error: 'some error'
        })
      }));

      http.put(putData, putData)
        .catch((error) => {
          expect(mockApi.default).toHaveBeenCalledWith(putData, { method: 'PUT' }, putData);
          expect(error).toEqual('some error');
          done();
        });
    });
  });
});