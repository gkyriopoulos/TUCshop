import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

export const UserRoute = ({children, role}) => {
  const refresh_token = sessionStorage.getItem('refresh_token');
  const user_role = sessionStorage.getItem('role');
  if (refresh_token && (user_role === role)) {
    return <Outlet />;
  } else {
    return  <Navigate to={"/"} />;
  }
};
