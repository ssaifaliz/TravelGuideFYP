import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import Login from "../../components/login_signup/login";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalName, setModalName] = React.useState("login");
  const modalValueChange = (e) => {
    setModalName(e)
    setModalShow(true)
  };
  return (
    <>
      <div style={{ backgroundColor: '#fff' }}>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a href="/" style={{
                display: 'inline-block',
                paddingTop: '0.3125rem',
                paddingBottom: '0.3125rem',
                marginRight: '1rem',
                fontSize: '1.25rem', lineHeight: 'inherit',
                whiteSpace: 'nowrap',
              }} className="navbar-brand nuxt-link-exact-active nuxt-link-active" aria-current="page">
                <img style={{
                  maxWidth: '100px',
                }} src={logo} alt="" />
              </a>
              <button type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" className="navbar-toggler collapsed">
                <span className="navbar-toggler-icon">
                </span>
              </button>
              <div id="navbarNav" className="navbar-collapse collapse">
                <ul className="nav navbar-nav ml-auto" style={{ marginLeft: 'auto' }}>
                  <li onClick={() => modalValueChange("traveler")} className="nav-item"><a style={{ cursor: 'pointer' }} data-toggle="modal" className="nav-link custom_nav_link">Travel Login</a></li>
                  <li onClick={() => modalValueChange("agent")} className="nav-item"><a style={{ cursor: 'pointer' }} data-toggle="modal" className="nav-link custom_nav_link">Agent Login</a></li>
                  <li onClick={() => modalValueChange("guide")} className="nav-item"><a style={{ cursor: 'pointer' }} data-toggle="modal" className="nav-link custom_nav_link">Guide Login</a></li>
                  <li className="nav-item"><Link to="/find-tour" className="nav-link custom_nav_link">Find A Tour</Link></li>
                  <li className="nav-item"><Link to="/tour-packages" className="nav-link custom_nav_link">Tour Packages</Link></li>
                  <li className="nav-item"><Link to="/bike-tour" className="nav-link custom_nav_link">Bike Tour</Link></li>
                  <li className="nav-item"><Link to="/food-tour" className="nav-link custom_nav_link">Food Tour</Link></li>
                  {/* <li className="burgerIcon">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        <AiOutlineMenu />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to="/find-tour">Find A Tour</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/tour-packages">Tour Packages</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/bike-tour">Bike Tour</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/food-tour">Food Tour</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Login show={modalShow} onHide={() => setModalShow(false)} modalname={modalName} />
      </div>
      {/* <div className="navSection">
        <div className="container">
          <div className="mainNav">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
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

              <div className="loginSignup">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <BsFillPersonFill />
                    <span>Log In</span>
                  </Dropdown.Toggle>
                  onClick={() => setModalShow(true)}
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <span onClick={() => modalValueChange("traveler")}>
                        Traveler Login
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span onClick={() => modalValueChange("agent")}>Agent Login</span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span onClick={() => modalValueChange("guide")}>Guide Login</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
                    <Dropdown.Item>
                      <Link to="/walking-tour">Walking Tour</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/bike-tour">Bike Tour</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/food-tour">Food Tour</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <Login show={modalShow} onHide={() => setModalShow(false)} modalname={modalName} />
      </div> */}
    </>
  );
};

export default Navbar;
