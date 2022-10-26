import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Register = () => {
  const [error, setError] = useState('');
  const { signUp, updateUserProfile, signInWithGoogle, signInWithFacebook  } = useContext(AuthContext);
  const navigate = useNavigate();

  

  // Create User
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password, name, photo);
    signUp(email, password)
    .then(result => {
      const user = result.user;
      handleUserProfile(name, photo);
      console.log(user);
      setError('');
      navigate('/');
    })
    .catch(error => setError(error.message));
  }
  // Create User

  const handleUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL : photo
    }
    updateUserProfile(profile)
    .then(() => { })
    .catch(error => console.error(error));
  }
   // Handle Google SignIn
   const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => console.error(error));
  };
  // Handle Facebook SignIn
  const handleFacebookLogin = () => {
    signInWithFacebook()
    .then(result => {
      console.log(result.user);
      navigate("/home");
    })
    .catch(error => console.error(error));
  } 
  return (
    <div className='w-2/4 mx-auto border rounded-lg p-8 my-10'>
        <form onSubmit={handleRegister}>
        <div className="form-control">
        <h2 className='text-center text-2xl font-bold'>Register Now</h2>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name='name' placeholder="full name" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text" name='photo' placeholder="photoURL" className="input input-bordered"/>
        </div>
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        </div>
        <p className="text-red-500 mt-2">{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Register</button>
        </div>
        <p className='mt-2 text-center'>Already have an account? Please <Link to='/login' className='underline'>login</Link></p>
      </form>
      
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline my-2 w-full"
      >
       <FaGoogle className="text-[20px] mr-1"/> Continue With Google
      </button>
      
      <button onClick={handleFacebookLogin} className="btn btn-outline btn-primary my-2 w-full">
        <FaFacebook className="text-[20px] mr-1"/>Continue With Facebook
      </button>
    </div>
  );
};

export default Register;