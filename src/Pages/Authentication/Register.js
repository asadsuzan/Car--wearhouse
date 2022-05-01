import React from "react";
import "./Authnetication.css";
import logo from "../../imges/logo5.png";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";

const Register = () => {
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
          <i>Register</i>
        </h3>
        <form className=" w-75 mx-auto ">
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
          <div className="input-group d-flex align-items-center">
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
          </div>
          <span className="text-danger fs-4 mt-5">Error</span>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              type="submit"
              value={"REGISTER"}
              required
              className="submit-btn"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
