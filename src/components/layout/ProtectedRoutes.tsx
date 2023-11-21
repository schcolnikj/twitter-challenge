import React from "react";

import { jwtDecode } from 'jwt-decode';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const localStorageToken = localStorage.getItem("token");	
	if (localStorageToken) {
		try {
			const decodedToken = jwtDecode(localStorageToken);
			const currentTime = Date.now() / 1000
			
			if (decodedToken && decodedToken.exp && decodedToken.exp < currentTime) { 
				localStorage.removeItem('token');
				<Navigate to="/sign-in"  replace />
			}
			return <Outlet />
		} catch (error) {
		return <Navigate to="/sign-in"  replace />
			
		}
	}
	return <Navigate to="/sign-in"  replace />
};

export default ProtectedRoutes;