import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import Login from "../login_signup/login";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="navSection">
      <div className="container">
        <div className="mainNav">
          <div className="logo">
          <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="details">
            <div className="currency">
              <Form.Select aria-label="Default select example">
                <option value="1">PKR</option>
                <option value="2">$ CAD</option>
                <option value="3">$ USD</option>
              </Form.Select>
            </div>
            <div className="cart">
              <BsFillCartFill />
            </div>

            <div className="loginSignup" onClick={() => setModalShow(true)}>
              <BsFillPersonFill /> Log In
            </div>
            <div className="burgerIcon">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <AiOutlineMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/find-tour">Find A Tour</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Navbar;
