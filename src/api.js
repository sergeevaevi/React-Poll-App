import {getStoredStateOrDefault} from './localstore'

const BASE_URI = "http://206.81.21.110/api/v1"

function getPolls() {
  const { token } = getStoredStateOrDefault()
  const params = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return fetch(`${BASE_URI}/polls`, params)  
    .then(function(res) {
      return res.json();
    })
    
}

export default {
  getPolls,
}
