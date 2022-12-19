
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AuthReducer from '../reducers/AuthReducer';
import { CallReducer } from '../reducers/CallReducer';

const rootReducer = combineReducers({
  userAuth:AuthReducer,
  callLog:CallReducer,
});

const store = configureStore({
  reducer:rootReducer,
  middleware: [thunk]
})

export default store;