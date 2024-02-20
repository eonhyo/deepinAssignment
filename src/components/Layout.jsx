import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "redux/modules/authSlice";
import { StNav } from "style/componentsStyle/LayoutStyle";

function Layout() {
  const dispatch = useDispatch();
  const logoutBtnHandler = () => {
    return dispatch(logout());
  };

  return (
    <>
      <StNav>
        <Link to="/">HOME</Link>
        <div>
          <Link to="/profile">MY PROFILE</Link>
          <span onClick={logoutBtnHandler}>LOGOUT</span>
        </div>
      </StNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

