import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import PrivateRoute from "pages/status/PrivateRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/detail/:id" element={<PrivateRoute><Detail /></PrivateRoute>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
 