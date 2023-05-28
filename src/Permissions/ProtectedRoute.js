import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = '/Sing-in' }) => {
    if (!user) {
      alert("Access Denied, you are not allowed there");
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
  };

export default ProtectedRoute;
