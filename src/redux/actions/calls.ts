import { FETCH_CALLS, FILTER_ARCHIEVE, FILTER_UN_ARCHIEVE } from "./actions";
import { axiosInstance } from "../../config";
import store from "../store";

export const fetchCalls = (offset:number) => async (dispatch: typeof store.dispatch) =>{
  try{
    let response = await axiosInstance.get(`/calls?offset=${offset}&limit=10`);
    const {data} = response;
    dispatch({type:FETCH_CALLS,payload:data});
  }catch(err){  
    console.log("Error",err);
  }
}

export const filterArchieveCall = ()=>{
  return {
    type:FILTER_ARCHIEVE
  }
}

export const filterUnArchieveCall = () =>{
  return {
    type: FILTER_UN_ARCHIEVE
  }
}