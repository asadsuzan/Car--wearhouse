import React from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../imges/logo5.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firbaseConfig";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  // for login
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <p>loding</p>;
  }
  if (user) {
    navigate("/");
  }

  return (
    <section className="authentication">
      {/* titlle here */}
      <div className="authentication-title d-flex align-items-center justify-content-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="fs-1 text-capitalize">car manager</div>
      </div>
      {/* login form here */}
      <div className="authentication-form w-75 mx-auto">
        <h3 className="text-center text-light fs-1 my-5">
          <i>LOGIN</i>
        </h3>
        <form onSubmit={handleLogin} className=" w-75 mx-auto ">
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <span className="icons">
              <MdEmail />
            </span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className=""
            />
          </div>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <span className="icons">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className=""
            />
          </div>

          <span className="text-danger  mt-5">
            {error ? error.message : ""}
          </span>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              type="submit"
              value={"LOGIN"}
              required
              className="submit-btn"
            />
          </div>
          {/* navigate to register if haven't an accout */}
          <div className="text-light d-flex justify-content-between">
            <span>
              {" "}
              New To Car Manager? <Link to={"/register"}>REGISTER NOW</Link>
            </span>
            <span>Forgot Password?</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
