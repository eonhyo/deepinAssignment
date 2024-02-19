import { createSlice } from "@reduxjs/toolkit";

export const StatusSlice = createSlice({
    name : 'status',
    initialState : { 
        isLogin : false
    },
    reducers:{
        login : (state)=> {
            state.isLogin=true;
        },
        logout : (state)=> {
            state.isLogin=false;
        }
    }
})

export const {login,logout} = StatusSlice.actions;

export default StatusSlice.reducer