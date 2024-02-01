import React, { useContext, useRef, useState } from "react";
import login from "../../assets/login/loginn.avif";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { userLogin, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const loggesUser = result.user;
        console.log(loggesUser);
        setSuccess("user login successfullay");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleResetPassword = (event) => {
    const emaill = emailRef.current.value;
    console.log(emaill);
    if (!emaill) {
      alert("Please provide a valid email tlo reset password");
      return;
    }
    resetPassword(emaill)
      .then(() => {
        alert("Please cheak your email");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 text-center lg:text-left mr-12">
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
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
                <label className="label">
                  <button
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary  text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-cyan-600 hover:from-teal-700 hover:to-cyan-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  Login
                </button>
              </div>
              <div>
                <label className="label ">
                  <p className="label-text-alt">
                    Are you new?
                    <Link to="/register" className=" hover:underline">
                      <span className="text-1xl font-bold">
                        {" "}
                        Create an Account
                      </span>
                    </Link>
                  </p>
                </label>
              </div>
            </form>
            <div>
              <label className="label ">
                <p className="label-text-alt text-2xl text-center text-green-500">
                  {success}
                </p>
                <p className="label-text-alt text-2xl text-center text-red-500">
                  {error}
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
