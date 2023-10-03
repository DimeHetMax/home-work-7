import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import axios from 'axios';
// import { rootReducer } from "./reducer";
import { combineReducers } from 'redux'
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const myMd1 = store => next => action => {
  console.log("action",action)
  next(action)
}
const myMd2 = store => next => action =>{
  console.log("action",action)
  next(action)
}

export const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware => {
    const defaultMd = getDefaultMiddleware()
    return [...defaultMd, myMd1,myMd2]
  }
});
export const persistor = persistStore(store)

export const fetchTask = () => async dispatch =>{
  try {
    const response = await axios.get("https://pixabay.com/api/?key=36536171-20dffb6feebbd7a17f40a2c96&q=yellow+flowers&image_type=photo&pretty=true")
    console.log(response)
  } catch (error) {
    
  }
}

