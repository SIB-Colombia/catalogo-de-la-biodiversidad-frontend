import fetch from 'isomorphic-fetch';
import Const from '../const';
var rootMe = null;

//Http
export function http(type, data) {

  var body = new FormData();
  if (data)
    for (var key in data)
      body.append(key, data[key]);

  data = data
    ? body
    : null;

  let config = {
    method: type,
    // mode: 'cors',
    headers: {
      'Authorization': getToken()
    },
    body: data
  }

  return config;

}

//is authenticated
export function isAuthenticated() {
  return getUser();
}

//middleware

var mock = null;

export function middleware(component, redirect, rolesRequired) {

  //console.log('mock', mock);

  let current = mock || JSON.parse(localStorage.getItem(Const.USER));

  if (current) {
    if (rolesRequired) {
      let ok = hasRole(rolesRequired, current.roles);
      if(!ok){
        return redirect;
      }else{
        return component;
      }
    }else{
      return component;
    }

  } else {
    console.log('No hay store de usuario, relogin');
    return redirect;
    // window.location.href = '';
  }

}

//has Role
export function hasRole(rolesRequired, rolesUser) {
  try {
    let isAuthorized = false;
    rolesRequired.forEach(rolReq => {
      rolesUser.forEach(RolUser => {
        if (rolReq === RolUser)
          isAuthorized = true;
        }
      );
    });
    return isAuthorized;
  } catch (err) {
    return false;
  }
}


//Me

export function me() {

  console.log('me');

  return fetch(`${Const.server.local}/api/user/me`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {

    if (data._id) {
      return setUser(data).then(user => {
        return user;
      });
    } else {
      throw {error: data.message};
    }

  }).catch(err => {
    clean();
  })

}

//signin
export function signin(user) {
  return fetch(`${Const.server.local}/auth/local`, http('POST', user)).then((response) => {
    return response.json()
  }).then((data) => {

    if (data.token) {
      return setToken(data).then(token => {
        return token;
      });
    } else {
      throw {error: data.error};
    }
  }).catch(err => {
    return err;
  })
}

//signup
export function signup(user) {
  return fetch(`${Const.server.local}/api/user`, http('POST', user)).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  }).catch(err => {
    return err;
  })
}

//logout
export function logout() {
  clean();
  window.location.reload();
}

//Get Token
export function getToken() {
  return localStorage.getItem(Const.TOKEN);
}

//Set Token
export function setToken(data) {
  try {
    localStorage.setItem(Const.TOKEN, data.token);
  } catch (err) {
    return Promise.reject(err.message);
  }
  return Promise.resolve(data.token || null);
}

//Get User
export function getUser() {
  return JSON.parse(localStorage.getItem(Const.USER));
}

//Set User
export function setUser(data) {
  try {
    localStorage.setItem(Const.USER, JSON.stringify(data));
  } catch (err) {
    return Promise.reject(err.message);
  }
  return Promise.resolve(rootMe = data || null);
}

//Clean
export function clean() {
  localStorage.clear();
}
