import axios from "axios";

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 2000,
  }
})

api.interceptors.response.use(
  (response) => response,

  error => {
    const status = error.reponse.status

    switch (status) {
      case 400: ; break;
      case 401: ; break;
      case 403: ; break;
      case 404: ; break;
      case 500: ; break;
    }

    return Promise.reject(error)
  }
)