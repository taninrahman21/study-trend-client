import React, { useState } from "react";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/UserContext";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const form = location?.state?.form?.pathname || "/";

  // Handle form login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(form, {replace: true});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Handle Google SignIn
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(form, {replace: true});
      })
      .catch((error) => console.error(error));
  };
  // Handle Facebook SignIn
  const handleFacebookLogin = () => {
    signInWithFacebook()
    .then(result => {
      console.log(result.user);
      navigate(form, {replace: true});
    })
    .catch(error => console.error(error));
  } 
  return (
    <div className="w-2/4 mx-auto border rounded-lg px-8 pt-8 pb-4 my-10">
      <form onSubmit={handleLogin}>
        <h2 className="text-center text-2xl font-bold">Login Now</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="text-red-500 mt-2">{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
        <p className="text-center mt-2">
          New to this website? Please{" "}
          <Link to="/register" className="underline">
            {" "}
            Register
          </Link>
        </p>
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

export default Login;
