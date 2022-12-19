import { LOG_IN, FAILED_LOGIN, LOG_OUT, USER_DETAIL, UPDATE_TOKEN } from "./actions";
import { axiosInstance } from "../../config"
import store from "../store";

interface ActionInterface{
  type:string;
  payload:{};
}

export const logIn = (email:string,password:string) => async(dispatch: typeof store.dispatch) => {
  try{
    console.log(email,password)
      const response = await axiosInstance.post('/api/login', {
        email,
        password
      })
      console.log("Response",response);
      dispatch({type:LOG_IN,response});
  }catch(err){
    console.log("Error",err);
    dispatch({type:FAILED_LOGIN,err});
  }
}


export const logOut = () =>{
  return {
    type: LOG_OUT
  }
}

export  const userDetail = () => async(dispatch: typeof store.dispatch) => {
  try{
    const response = await axiosInstance.get('/api/me');
    console.log("me", response);

    dispatch({type:USER_DETAIL, response})

  }catch(err){
    console.log("Error",err);
  }
}

export const updateRefreshToken = (token:string):ActionInterface =>{
    return {
      type: UPDATE_TOKEN,
      payload:{
        access_token:token
      }
    }
}