// import { createStore, combineReducers } from "redux";
import letters from "../modules/letters";
import member from "../modules/member";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import StatusSlice from "pages/Slice/StatusSlice";

// const rootReducer = combineReducers({ letters, member });

// const store = createStore(rootReducer, devToolsEnhancer());
const store = configureStore({
  reducer: {
    letters,
    member,
    status: StatusSlice
  }
});

export default store;
