import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ isAuth }) => {
  return (
    isAuth ? <Outlet /> : <Navigate to={'/login'} />
  );
};

ProtectedRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default ProtectedRoutes;
