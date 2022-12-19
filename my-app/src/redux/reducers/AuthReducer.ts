import { FAILED_LOGIN, LOG_IN, LOG_OUT, UPDATE_TOKEN } from "../actions/actions"

export interface AuthInterface{
  signedIn: boolean;
  userId: string;
  token: string;
  refreshToken: string;
}

const INITIAL_STATE:AuthInterface = {
  signedIn:false,
  userId:'',
  token:'',
  refreshToken:''
}

const AuthReducer =(signedInState=INITIAL_STATE, action:any)=>{
  switch(action.type){
    case LOG_IN:
      return {
        signedIn:true,
        userId:action.payload.id,
      };
    case FAILED_LOGIN:
      return {
       ...signedInState,
        signedIn:false
      }
    case LOG_OUT:
      return {
        signedIn:false,
        userId:null
      }
    case UPDATE_TOKEN:{
      return {
        ...signedInState,
        token:action.payload.access_token
      }
    }
  }
  return signedInState;

}



export default AuthReducer;