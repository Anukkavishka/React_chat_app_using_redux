import { createStore } from "redux";
//import { contacts } from "../utils/static-data"; //this is the returned 10 objects of users contacts from static_data.js
//import ContactReducer from "./ContactReducer/ContactReducer";
import CombinedReducer from "./CombinedReducer";
const store = createStore(CombinedReducer); //here we are initializing the state of redux store using the 10 contacts

export default store;
