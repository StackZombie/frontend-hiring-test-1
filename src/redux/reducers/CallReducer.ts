
import { FETCH_CALLS, FILTER_ARCHIEVE, FILTER_UN_ARCHIEVE } from "../actions/actions";
export interface Call {
  id: number;
  direction: string; // "inbound" or "outbound" call
  from: string; // Caller's number
  to: string; // Callee's number
  duration: number; // Duration of a call (in seconds)
  is_archived: boolean; // Boolean that indicates if the call is archived or not
  call_type: string; // The type of the call, it can be a missed, answered or voicemail.
  via: string; // Aircall number used for the call.
  created_at: string; // When the call has been made.
  notes: Note[]; // Notes related to a given call
}
interface Note{
  id: number;
  content: string;
}

export interface InitialState{
  totalCount:number;
  calls: Call[];
  hasNextPage:boolean
}


const INITIAL_STATE:InitialState = {
  totalCount:0,
  calls:[],
  hasNextPage:false,
}
export const CallReducer = (callState = INITIAL_STATE, action:any) =>{
  switch(action.type){
    case FETCH_CALLS:
      return{
        totalCount: action.payload.totalCount,
        hasNextPage: action.payload.hasNextPage,
        calls : [...action.payload.calls]
      }
    case FILTER_ARCHIEVE:
      return{
        ...callState,
        calls: callState.calls.filter((call)=>call.is_archived === true)
      }
    case FILTER_UN_ARCHIEVE:
      return{
        ...callState,
        calls:callState.calls.filter((call)=>call.is_archived === false)
      }
  }

  return callState;
}