import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Register = () => {
  const { signUp } = useContext(AuthContext);
  

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
      console.log(user);
    })
    .catch(error => console.error(error));
  }
  // Create User
  return (
    <div>
        <form onSubmit={handleRegister} className='w-2/4 mx-auto border rounded-lg p-8 my-10'>
        <div className="form-control">
        <h2 className='text-center text-2xl'>Register Now</h2>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;