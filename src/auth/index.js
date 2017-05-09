import fetch from 'isomorphic-fetch';
import Const from '../const';

//Http

export function http(type) {

  return {
    method: type,
    // mode: 'cors',
    // headers: new Headers({
    // 'Authorization': `bearer ${localStorage.getItem('token-catalogo')}`
    // })
  }
}

//is authenticated

export function isAuthenticated() {
  // console.log(nextState);
  // console.log(replaceState);
  // console.log('herisAuthenticatede');
  // return false;
  // return typeof localStorage.getItem('token-catalogo')
  // !=='undefined'
  //   ? true
  //   : false;
}

//Get Me

export function me() {

  fetch(`${Const.server.local}/api/user/me`, this.http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//signin

export function signin() {

  fetch(`${Const.server.local}/auth/local`, this.http('POST')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//logout

export function logout() {

  localStorage.removeItem('token-catalogo');

}
