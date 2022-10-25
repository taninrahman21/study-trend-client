import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center mt-20'>
      <h2 className='text-2xl mb-3'>This Page is Not Found!</h2>
      <Link to='/home'className='btn btn-sm btn-primary'>Back To Home</Link>
    </div>
  );
};

export default NotFound;