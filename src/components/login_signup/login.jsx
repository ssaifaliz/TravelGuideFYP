import React from "react";
import "./login.scss";
import Modal from "react-bootstrap/Modal";
import { FaEnvelope, FaLock ,FaUserAlt } from "react-icons/fa";

const Login = (props) => {
  const [showSignup, setShowSignup] = React.useState(false);

  return (
    <Modal
      dialogClassName="my-modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {!showSignup ? (
        <div className="LoginPage">
          <div className="Heading">Login</div>
          <div className="label">Email</div>
          <div class="search-icon">
            <div class="icon">
              <FaEnvelope />
            </div>
            <input placeholder="e.g., youremail@email.com" />
          </div>
          <div className="label">Password</div>
          <div class="search-icon">
            <div class="icon">
              <FaLock />
            </div>
            <input type="text" placeholder="Enter Password"/>
          </div>
          <div className="hrefLink" onClick={() => setShowSignup(true)}>Signup</div>
          <div className="loginBtn">
            <button>Login</button>
          </div>
        </div>
      ) : (
        <div className="LoginPage">
          <div className="Heading">Sign Up</div>
          <div className="label">Full Name</div>
          <div class="search-icon">
            <div class="icon">
              <FaUserAlt />
            </div>
            <input type="text" placeholder="Enter Your Full Name"/>
          </div>
          <div className="label">Email</div>
          <div class="search-icon">
            <div class="icon">
              <FaEnvelope />
            </div>
            <input placeholder="e.g., youremail@email.com" />
          </div>
          <div className="label">Password</div>
          <div class="search-icon">
            <div class="icon">
              <FaLock />
            </div>
            <input type="text" placeholder="Enter Password"/>
          </div>
          <div className="hrefLink" onClick={() => setShowSignup(false)}>Login</div>
          <div className="loginBtn">
            <button>Sign Up</button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Login;
