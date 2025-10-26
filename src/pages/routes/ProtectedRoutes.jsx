// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";
import { auth } from "../../firebase/firebase.config";


const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600">Checking authentication...</p>
    );
  }

  if (error) {
    console.error("Auth error:", error);
  }

  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default ProtectedRoute;
