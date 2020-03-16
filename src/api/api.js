import axios from 'axios';

export const callGetApi = (url, token) =>
  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      responseType: 'json',
      timeout: 600000,
    })
    .then(
      response =>
        response.status == 200
          ? response.data
          : Promise.reject(response.statusText),
      error => Promise.reject(error),
    )
    .then(
      json => ({
        json: json,
      }),
      error => ({
        error,
      }),
    )
    .catch(error => alert('fetch error:', error));

export const callPostApi = (url, data, token) =>
  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      responseType: 'json',
      timeout: 600000,
    })
    .then(
      response =>
        response.status == 200
          ? response.data
          : Promise.reject(response.statusText),
      error => Promise.reject(error),
    )
    .then(
      json => ({
        json: json,
      }),
      error => ({
        error,
      }),
    )
    .catch(error => alert('Response error:', error));
