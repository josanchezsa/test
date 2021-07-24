import axios from 'axios'
import store from '../store'
import * as vars from '@/vars.json'

const httpAxios = axios.create({
  params: {},
})

export function httpGet (url) {
  return new Promise((resolve, reject) => {
    if (this.decode(localStorage.getItem('token'))) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      store.dispatch('spinner/setBanView', true)
      httpAxios.get(vars.url + url, config).then((response) => {
        // console.log(response)
        if (response.status.toString() === '200') {
          const dataSnack = {
            snackbar: true,
            color: 'success',
            message: 'Proceso realizado de manera correcta',
          }
          store.dispatch('notification/setSnackBar', dataSnack)
          store.dispatch('spinner/setBanView', false)
          resolve(response)
        } else {
          const dataSnack = {
            snackbar: true,
            color: 'error',
            message: 'Error al momento de consumir el servicio web',
          }
          store.dispatch('notification/setSnackBar', dataSnack)
          store.dispatch('spinner/setBanView', false)
          reject(response)
        }
      }).catch((error) => {
        let dataSnack = {}
        if (error.response) {
          dataSnack = {
            snackbar: true,
            color: 'error',
            message: error.response.data,
          }
        } else {
          dataSnack = {
            snackbar: true,
            color: 'error',
            message: 'Error al momento de consumir el servicio web',
          }
        }
        store.dispatch('notification/setSnackBar', dataSnack)
        store.dispatch('spinner/setBanView', false)
        reject(error)
      })
    }
  })
}

export function httpPost (url, body) {
  return new Promise((resolve, reject) => {
    if (this.decode(localStorage.getItem('token'))) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
      store.dispatch('spinner/setBanView', true)
      httpAxios.post(vars.url + url, body, config).then((response) => {
        // console.log(response)
        if (response.status.toString() === '200') {
          const dataSnack = {
            snackbar: true,
            color: 'success',
            message: 'Proceso realizado de manera correcta',
          }
          store.dispatch('notification/setSnackBar', dataSnack)
          store.dispatch('spinner/setBanView', false)
          resolve(response)
        } else {
          const dataSnack = {
            snackbar: true,
            color: 'error',
            message: 'Error al momento de consumir el servicio web',
          }
          store.dispatch('notification/setSnackBar', dataSnack)
          store.dispatch('spinner/setBanView', false)
          reject(response)
        }
      }).catch((error) => {
        let dataSnack = {}
        if (error.response) {
          dataSnack = {
            snackbar: true,
            color: 'error',
            message: error.response.data,
          }
        } else {
          dataSnack = {
            snackbar: true,
            color: 'error',
            message: 'Error al momento de consumir el servicio web',
          }
        }
        store.dispatch('notification/setSnackBar', dataSnack)
        store.dispatch('spinner/setBanView', false)
        reject(error)
      })
    }
  })
}
