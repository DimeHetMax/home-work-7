// import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux'
// import { addContacts, deleteContact, filterChange } from "./actions";

// const contactsInitialState = [];
// const contactsReducer = createReducer(contactsInitialState, builder => 
//     builder.addCase(addContacts, (state, action)=>{
//         return [...state, action.payload]
//     }).addCase(deleteContact, (state, action)=>{
//         return state.filter(state => state.id !== action.payload)
//     }) 
// )

// const filterInitialState = "";
// const filterReducer = createReducer(filterInitialState, builder =>
//     builder.addCase(filterChange, (state, action)=>{
//         return action.payload
//     })
// )

// export const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
//   })