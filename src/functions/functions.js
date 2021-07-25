import axios from 'axios'

const httpAxios = axios.create({
  params: {},
})

export function httpGetUsername (username) {
  return new Promise((resolve, reject) => {

    httpAxios
      .get("https://bio.torre.co/api/bios/" + username)
      .then(response => {
        if (response.status.toString() === '200') {
          resolve(response)
        } else {
          reject(response)
        }
      }).catch((error) => {
        reject(error)
      });
  })
}
export function httpGetOpport (id) {
  return new Promise((resolve, reject) => {
    httpAxios
      .get("https://torre.co/api/opportunities/" + id)
      .then(response => {
        if (response.status.toString() === '200') {
          resolve(response)
        } else {
          reject(response)
        }
      }).catch((error) => {
        reject(error)
      });
  })
}

export function httpPostJobs (offset, size, aggregate) {
  return new Promise((resolve, reject) => {

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }

    httpAxios
      .post(
        "https://search.torre.co/opportunities/_search/?offset=" + offset + "&size=" + size + "&aggregate=" + aggregate,
        null,
        config
      )
      .then(response => {
        if (response.status.toString() === '200') {
          resolve(response)
        } else {
          reject(response)
        }
      }).catch((error) => {
        reject(error)
      });
  })
}

export function httpPostPeople (offset, size, aggregate) {
  return new Promise((resolve, reject) => {

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }

    httpAxios
      .post(
        'https://search.torre.co/people/_search/?[offset=' + offset + '&size='+ size + '&aggregate='+ aggregate,
        null,
        config
      )
      .then(response => {
        if (response.status.toString() === '200') {
          resolve(response)
        } else {
          reject(response)
        }
      }).catch((error) => {
        reject(error)
      });
  })
}
