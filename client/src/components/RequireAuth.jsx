import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, unstable_HistoryRouter, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const { user, loading } = useSelector(state=>state.auth);

   
    if (!user) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return children;
};

export default RequireAuth;