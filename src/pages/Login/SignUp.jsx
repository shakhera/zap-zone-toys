import React, { useContext, useState } from "react";
import regLogo from "../../assets/login/account.avif";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    if (password !== confirm) {
      setError("your password does not match");
      return;
    } else if (password.length < 6) {
      setError("password length must be 6 or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggesUser = result.user;
        console.log(loggesUser);
        setSuccess("user create successfullay");
        handleUpdateProfile(name, photoUrl);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleUpdateProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    console.log(profile);
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 text-center lg:text-left mr-12">
            <img src={regLogo} alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl font-bold text-center text-slate-600">
                Create An Account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary  text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-cyan-600 hover:from-teal-700 hover:to-cyan-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  Create An Account
                </button>
              </div>
              <div>
                <label className="label ">
                  <p className="label-text-alt">
                    Already have an account?
                    <Link to="/login" className=" hover:underline">
                      <span className="text-1xl font-bold"> Login</span>
                    </Link>
                  </p>
                </label>
              </div>
            </form>
            <div>
              <label className="label ">
                <p className="label-text-alt text-xl text-center text-green-500">
                  {success}
                </p>
                <p className="label-text-alt text-xl text-center text-red-500">
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

export default SignUp;
