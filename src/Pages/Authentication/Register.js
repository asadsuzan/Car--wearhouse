import React from "react";
import "./Authnetication.css";
import logo from "../../imges/logo5.png";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firbaseConfig";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";

const Register = () => {
  // FOR REGISTRATIONS
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const confirmPassword = e.target.repassword.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <section className="authentication">
      {/* titlle here */}
      <div className="authentication-title d-flex align-items-center justify-content-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="fs-1 text-capitalize">car manager</div>
      </div>
      {/* register form here */}
      <div className="authentication-form w-75 mx-auto">
        <h3 className="text-center text-light fs-1 my-5">
          <i>REGISTER</i>
        </h3>
        <form onSubmit={handleRegistration} className=" w-75 mx-auto ">
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <span className="icons">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              name="name"
              required
              className=""
            />
          </div>
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
          {/* input groups here */}
          {/* <div className="input-group d-flex align-items-center">
            <span className="icons">
              <BsArrowRepeat />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              name="repassword"
              required
              className=""
            />
          </div> */}
          <span className="text-danger  mt-5">
            {error ? error.message : ""}
          </span>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              type="submit"
              value={"REGISTER"}
              required
              className="submit-btn"
            />
          </div>
          {/* navigate to login if have an accout */}
          <div className="text-light">
            Allready Have an Account? <Link to={"/login"}>LOGIN</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
