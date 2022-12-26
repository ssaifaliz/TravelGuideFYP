import React from "react";
import "./login.scss";
import Modal from "react-bootstrap/Modal";
import {
  FaEnvelope,
  FaLock,
  FaUserAlt,
  FaGlobeAfrica,
  FaCity,
  FaRegAddressBook,
  FaMedal,
  FaPhoneAlt,
} from "react-icons/fa";

const Login = (props) => {
  const [showSignup, setShowSignup] = React.useState(false);
  if (props.modalname === "traveler") {
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
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>
            <div className="hrefLink" onClick={() => setShowSignup(true)}>
              Signup
            </div>
            <div className="loginBtn">
              <button>Login</button>
            </div>
          </div>
        ) : (
          <div className="LoginPage">
            <div className="Heading">Sign Up</div>
            <div className="label">Full Name</div>
            <div className="search-icon">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="label">Country</div>
            <div className="search-icon">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <select name="cars">
                <option value="Pakistan">Pakistan</option>
                <option value="London">London</option>
                <option value="England">England</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
            <div className="label">Email</div>
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>

            <div className="hrefLink" onClick={() => setShowSignup(false)}>
              Login
            </div>
            <div className="loginBtn">
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </Modal>
    );
  }
  if (props.modalname === "agent") {
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
            <div className="Heading">Agency Login</div>
            <div className="label">Email</div>
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>
            <div className="hrefLink" onClick={() => setShowSignup(true)}>
              Signup
            </div>
            <div className="loginBtn">
              <button>Login</button>
            </div>
          </div>
        ) : (
          <div className="LoginPage">
            <div className="Heading">Agency Information</div>
            <div className="label">Company Name</div>
            <div className="search-icon">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="label">Country</div>
            <div className="search-icon">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <select name="cars">
                <option value="Pakistan">Pakistan</option>
                <option value="London">London</option>
                <option value="England">England</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
            <div className="label">State/Province</div>
            <div className="search-icon">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <input placeholder="Enter your State/Province" />
            </div>
            <div className="label">City</div>
            <div className="search-icon">
              <div className="icon">
                <FaCity />
              </div>
              <input placeholder="Enter your City" />
            </div>
            <div className="label">Address</div>
            <div className="search-icon">
              <div className="icon">
                <FaRegAddressBook />
              </div>
              <input placeholder="Enter your Address" />
            </div>
            <div className="label">Email</div>
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>

            <div className="hrefLink" onClick={() => setShowSignup(false)}>
              Login
            </div>
            <div className="loginBtn">
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </Modal>
    );
  }
  if (props.modalname === "guide") {
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
            <div className="Heading">Guide Login</div>
            <div className="label">Email</div>
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>
            <div className="hrefLink" onClick={() => setShowSignup(true)}>
              Signup
            </div>
            <div className="loginBtn">
              <button>Login</button>
            </div>
          </div>
        ) : (
          <div className="LoginPage">
            <div className="Heading">Guide Information</div>
            <div className="label">Full Name</div>
            <div className="search-icon">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="label">Country</div>
            <div className="search-icon">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <select name="cars">
                <option value="Pakistan">Pakistan</option>
                <option value="London">London</option>
                <option value="England">England</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
            <div className="label">State/Province</div>
            <div className="search-icon">
              <div className="icon">
                <FaGlobeAfrica />
              </div>
              <input placeholder="Enter your State/Province" />
            </div>
            <div className="label">City</div>
            <div className="search-icon">
              <div className="icon">
                <FaCity />
              </div>
              <input placeholder="Enter your City" />
            </div>
            <div className="label">Address</div>
            <div className="search-icon">
              <div className="icon">
                <FaRegAddressBook />
              </div>
              <input placeholder="Enter your Address" />
            </div>
            <div className="label">Year Of Experience</div>
            <div className="search-icon">
              <div className="icon">
                <FaMedal />
              </div>
              <input placeholder="Enter your Experience" />
            </div>
            <div className="label">Phone</div>
            <div className="search-icon">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <input placeholder="Enter your Phone Number" />
            </div>

            <div className="label">Email</div>
            <div className="search-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input placeholder="e.g., youremail@email.com" />
            </div>
            <div className="label">Password</div>
            <div className="search-icon">
              <div className="icon">
                <FaLock />
              </div>
              <input type="text" placeholder="Enter Password" />
            </div>

            <div className="hrefLink" onClick={() => setShowSignup(false)}>
              Login
            </div>
            <div className="loginBtn">
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </Modal>
    );
  }
};

export default Login;
