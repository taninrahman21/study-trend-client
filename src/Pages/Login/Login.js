import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/home');  
      setError('');
    })
    .catch(error => {
      setError(error.message);
    });
  }
  return (
     <form onSubmit={handleLogin} className='w-2/4 mx-auto border rounded-lg p-8 my-10'>
      <h2 className='text-center text-2xl'>Login Now</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
        </div>
        <p className='text-red-500 mt-2'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
      </form>
  );
};

export default Login;