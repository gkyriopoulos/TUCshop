import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

export const AuthRoute = ({role}) => {
  const refresh_token = localStorage.getItem('refresh_token');
  const user_role = localStorage.getItem('role');
  if (refresh_token && (user_role === role)) {
    return <Outlet />;
  } else {
    return  <Navigate to={"/"} />;
  }
};
