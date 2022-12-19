import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import {OPTIONS} from '../pages/CallLogs/utils';
import store from '../redux/store';
import { fetchCalls, filterArchieveCall,filterUnArchieveCall } from "../redux/actions/calls";

export const useDownloadCallLogsData = (offset:number) =>{
  console.log("Changed",offset);
  const dispatch = useDispatch<typeof store.dispatch>();
  useEffect(()=>{
    dispatch(fetchCalls(offset))
  },[offset])
  return;
}

export const useFilterCallLogsData = (option:string) =>{
  const dispatch = useDispatch<typeof store.dispatch>();
  useEffect(()=>{
    if(option === OPTIONS[0]){
      dispatch(filterArchieveCall())
    }else if (option === OPTIONS[2]){
      dispatch(filterUnArchieveCall());
    }
  },[option])
  return;
}