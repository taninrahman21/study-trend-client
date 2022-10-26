import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <p className='text-center'>Loading....</p>
  }
  if(user?.uid){
    return children;
  }
  return <Navigate to='/login' state={{form: location}} replace></Navigate>;
};

export default PrivateRoute;