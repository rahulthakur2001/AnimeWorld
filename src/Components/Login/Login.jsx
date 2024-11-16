import React, { useState } from "react";
import styles from "./Login.module.css";
import loginImage from "../../assets/Images/Login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className={styles.mainLogin}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSection}>
          <h3>Login</h3>
          <p>Get access to your Orders,<br /> Wishlist and Recommendations</p>
          <img src={loginImage} alt="Login" />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="emailOrPhone"
              value={inputValue}
              onChange={handleChange}
              placeholder=""
            />
            <label
              htmlFor="emailOrPhone"
              className={inputValue ? styles.filled : ""}
            >
              Enter Email/Mobile Number
            </label>
          </div>
          <p>
            By continuing, you agree to Flipkart's{" "}
            <span>
              <Link to={"/pages/terms"}>Terms of Use</Link>
            </span>{" "}
            and{" "}
            <span>
              <Link to={"/privacypolicy"}>Privacy Policy</Link>.
            </span>
          </p>
          <button>Request OTP</button>
          <div className={styles.newac}>
             <p>New to Flipkart?  <span><Link>Create an account</Link></span></p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
