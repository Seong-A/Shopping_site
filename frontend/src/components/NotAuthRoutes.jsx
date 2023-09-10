import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';

const NotAuthRoutes = ({ isAuth }) => {
  return (
    isAuth ? <Navigate to={'/'} /> : <Outlet />
  )
}

NotAuthRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NotAuthRoutes;
