import React, {PropTypes} from 'react';
import config from '../../config';
import fetch from 'isomorphic-fetch'

class FileService extends React.Component {

  getHome() {
    return fetch(`${config.server}/api/hello/home`, config.http).then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
  }
}

export default FileService;
