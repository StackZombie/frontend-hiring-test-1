import axios from 'axios';
import { updateRefreshToken } from '../redux/actions/auth';
import store from '../redux/store';
const BASE_URL = process.env.BASE_URL;


const instance = axios.create({
  baseURL:BASE_URL,
  timeout:10000
})


instance.interceptors.request.use((config)=>{
    // set token to config 
    console.log("Config",config);
    const token = localStorage.getItem('access_token');
    if(token){
        if(!config.headers){
          config.headers = {

          }
        }
        config.headers['Authorization'] = 'Bearer '+JSON.stringify(token);

    }
    return config;
},
error=>{
  return Promise.reject(error);
})


instance.interceptors.response.use((response)=>{
  
  return response.data;
}
  ,(error)=>{
  const originalRequest = error.config;

  if(error.response.status === 401 && originalRequest.url === BASE_URL + '/auth/login'){
    window.location.href='/';
    return Promise.reject(error);
  }
  if(error.response.status === 401 && !originalRequest._retry){
    originalRequest._retry = true;
   // get refresh token from storage 
    const refreshToken = localStorage.getItem('access_token')
      return axios
        .post('/auth/refresh_token', {
          refresh_token: refreshToken
        })
        .then(res => {
          if (res.status === 201) {
            localStorage.setItem('access_token',res.data.access_token);
            store.dispatch(updateRefreshToken(res.data.access_token));
            axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('access_token');
            return axios(originalRequest)
          }
        })
  }
  return Promise.reject(error);
})

export {instance as axiosInstance}