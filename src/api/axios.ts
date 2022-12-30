import axios from "axios";
import { environment } from "@environments/environment";

const instance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    Authorization: environment.apiUrl,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 2000,
    withCredentials: true
  }
})

instance.interceptors.response.use(
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
export default instance