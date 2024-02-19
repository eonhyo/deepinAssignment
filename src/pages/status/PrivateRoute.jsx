import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const isLogin = useSelector((state)=> state.status.isLogin)
    return isLogin ?  children : <Navigate to ="/login"/>
}

export default PrivateRoute