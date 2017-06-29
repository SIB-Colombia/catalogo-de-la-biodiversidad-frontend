import fetch from 'isomorphic-fetch';
import Const from '../../const';
import {http} from '../../auth';

//Api Local


export function getUsers(page,byPage) {

  return fetch(`${Const.server.local}/api/user/${page}/${byPage}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

export function getUser(id) {
  return fetch(`${Const.server.local}/api/user/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

export function deleteUser(id) {

  return fetch(`${Const.server.local}/api/user/${id}`, http('DELETE')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

export function updateUser(id,data) {

  return fetch(`${Const.server.local}/api/user/${id}`, http('PUT', data)).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}
