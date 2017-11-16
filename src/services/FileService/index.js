import fetch from 'isomorphic-fetch';
import Const from '../../const';
import {http} from '../../auth';

export function getFiles() {

  return [
    {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/71728_orig.jpg',
      comment: 'Yo soy un texto de pruebas con un sentido largo que no cabe en la caja de texto'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/05869_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/99013_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/34567_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/09127_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/84940_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/07303_orig.jpg',
      comment: 'Aguila tirana Black...'
    }, {
      id: '56c4fe28f0106c67230e7394',
      name: 'Tagetes Patupa',
      description: 'L. 1758',
      image: '/background/62488_orig.jpg',
      comment: 'Aguila tirana Black...'
    }
  ];
}

export function getImages() {

  return [
    {
      src: 'https://farm1.staticflickr.com/521/19535475860_542e59c2c8.jpg',
      thumbnail: 'https://farm1.staticflickr.com/521/19535475860_542e59c2c8.jpg',
      caption: 'Photo by Jessica Weiller'
    }, {
      src: 'https://farm1.staticflickr.com/521/19535475860_542e59c2c8.jpg',
      thumbnail: 'https://farm1.staticflickr.com/521/19535475860_542e59c2c8.jpg',
      caption: 'Photo by Piotr Łaskawski'
    }
  ]

}

//Api Local

//Get Comments by file
export function getComments(id) {

  return fetch(`${Const.server.local}/api/comment/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get Comments by file

export function newComment(data) {

  return fetch(`${Const.server.local}/api/comment`, http('POST', data)).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get list Files

export function getList() {

  return fetch(`${Const.server.amazon}/lista`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

// Api Humboldt


export function getRecordSearch(params, page){
  const offset = page ? `page=${page}` : ''
  let extra = params ? params+'?'+offset:offset
  extra = extra+"&size=20"
  return fetch(`${Const.server.api_v1_5}/record_search/advanced_search`+extra, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

export function getRecordBasicSearch(params, page){
  const offset = page ? `page=${page}` : ''
  let extra = params ? params+'?'+offset:offset
  extra = extra+"&size=20"
  return fetch(`${Const.server.api_v1_5}/record_search/search`+extra, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}


//Get last update record
export function getLastUpdatedRecords() {
  return fetch(`${Const.server.api_v1_5}/last_updated_records`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get individual Record v1.5 / example: 56c4fe28f0106c67230e7394
export function getFile(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })
}

// Get Complete Record v1.5
export function getFileComplete(id) {

  return fetch(`${Const.server.api_v1_5}/complete-record/${id}`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get taxonRecordName v1.5
export function getTaxonRecordName(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}/taxon_record_name/1`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get AssociatedParty v1.5
export function getAssociatedParty(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}/associated_party/1`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get commonNamesAtomized v1.5
export function getCommonNamesAtomized(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}/common_names_atomized/1`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

//Get fullDescription v1.5
export function getFullDescription(id) {

  return fetch(`${Const.server.api_v1_5}/record/${id}/full_description/1`, http('GET')).then((response) => {
    return response.json()
  }).then((data) => {
    return data
  })

}

/*old services*/

//Get associated party

// export function getAssociatedParty(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/associated_party/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get More information

// export function getMoreInformation(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/more_information/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get direct threats

// export function getDirectThreats(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/direct_threats/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get taxonrecordname

// export function getTaxonRecordName(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/taxon_record_name/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get synonymsAtomized

// export function getSynonymsAtomized(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/synonyms_atomized/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get commonNamesAtomized

// export function getCommonNamesAtomized(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/common_names_atomized/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get hierarchy

// export function getHierarchy(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/hierarchy/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get abstract

// export function getAbstract(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/abstract/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get lifeForm

// export function getLifeForm(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/life_form/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get reproduction

// export function getReproduction(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/reproduction/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }

//Get annual_cycles

// export function getAnnualCycles(id) {
//
//   return fetch(`${Const.server.amazon}/fichas/${id}/annual_cycles/1`, http('GET')).then((response) => {
//     return response.json()
//   }).then((data) => {
//     return data
//   })
//
// }
