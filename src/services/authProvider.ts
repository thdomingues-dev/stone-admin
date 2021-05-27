import { AUTH_CHECK, AUTH_ERROR, AUTH_LOGIN, AUTH_LOGOUT  } from 'react-admin';

const authProvider = (type: any, params: any) => {
  if (type === AUTH_LOGIN) {
      const { username, password } = params;
      const request = new Request('http://localhost:5000/users');

      return fetch(request)
          .then(response => {
              if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
              }
              return response.json();
          })
          .then(data => {
            for(let i = 0; i < data.length; i++) {
              if(data[i].email === username && data[i].password === password) {
                localStorage.setItem('token', JSON.stringify(data[i]));
                return Promise.resolve();
              }
            }
            return Promise.reject();
          });
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status  = params.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' });
  }

  return Promise.reject('Unknown method');
}

export default authProvider;
