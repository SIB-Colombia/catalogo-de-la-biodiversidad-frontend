import fetch from 'isomorphic-fetch';
import {Config} from 'components';

class FileService {

  getHome() {
    return fetch(`${Config.server}/api/hello/home`, Config.http).then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
  }

}

export default FileService;
