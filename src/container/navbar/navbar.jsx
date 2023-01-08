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
    <div style={{backgroundColor:'#fff'}}>
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
                // height: 'auto',
                // display: 'block',
              }} src={logo} alt="" />
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" className="navbar-toggler collapsed">
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div id="navbarNav" className="navbar-collapse collapse">
              <ul className="nav navbar-nav ml-auto" style={{ marginLeft: 'auto' }}>
                <li className="nav-item"><a data-toggle="modal" className="nav-link custom_nav_link">Login</a></li>
                <li className="nav-item"><a data-toggle="modal" className="nav-link custom_nav_link">Signup</a></li>
                <li className="nav-item mr-3">
                  <a type="button" target="_blank" className="nav-link pointer_auto customized-trip">Plan Your Trip</a>
                </li>
                <li className="nav-item mr-3">
                  <a href="https://tripscon.com/blog" type="button " target="_blank" rel="noopener noreferrer" className="nav-link pointer_auto">Blog</a>
                </li>
                <li className="burgerIcon">
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
                  {/* <div style={{
                    border: 'none',
                    borderRadius: '40px',
                    display: 'block',
                    width: '100%',
                    fontWeight: '600',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }} className="header-buttons">
                    <div style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '40px',
                      backgroundColor: '#fff',
                      background: 'transparent',
                      cursor: 'pointer',
                      boxShadow: 'none',
                      padding: '0 5px',
                      color: '#000',
                      fontSize: '15px',
                      marginLeft: '-7px',
                    }} className="nav-item profile-dropdown become-host">
                      <button style={{
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                      }}>
                        Become a vendor
                        {/* <i className="fa-solid fa-chevron-up"></i> end here
                        <div className="profile_itmes_container dropdownns" >
                          <ul>
                            <li className="add_b">
                              <a type="button" className="nav-link">
                                <img style={{
                                  minWidth: '19px',
                                  height: '19px',
                                }} src={logo} alt="" />
                                Add business
                              </a>
                              <div className="add__business">
                                <b>Register</b> your travel services and earn significant revenue
                                through your business.
                              </div>
                            </li>
                            <li className="add_h">
                              <a type="button" className="nav-link btn">
                                <img style={{
                                  width: '19px',
                                  height: '19px',
                                }} src={logo} alt="" />
                                Become host</a>
                              <div className="add__host">
                                Become a Host by offering your accommodation, vehicle, food,
                                or activities to our guests.
                              </div>
                            </li>
                          </ul>
                        </div>
                      </button>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
    // <div className="navSection">
    //   <div className="container">
    //     <div className="mainNav">
    //       <div className="logo">
    //         <Link to="/">
    //           <img src={logo} alt="" />
    //         </Link>
    //       </div>
    //       <div className="details">
    //         <div className="currency">
    //           <Form.Select aria-label="Default select example">
    //             <option value="1">PKR</option>
    //             <option value="2">$ CAD</option>
    //             <option value="3">$ USD</option>
    //           </Form.Select>
    //         </div>
    //         <div className="cart">
    //           <BsFillCartFill />
    //         </div>

    //         <div className="loginSignup">
    //           <Dropdown>
    //             <Dropdown.Toggle id="dropdown-basic">
    //               <BsFillPersonFill />
    //               <span>Log In</span>
    //             </Dropdown.Toggle>
    //             {/* onClick={() => setModalShow(true)} */}
    //             <Dropdown.Menu>
    //               <Dropdown.Item>
    //                 <span onClick={()=> modalValueChange("traveler")}>
    //                   Traveler Login
    //                 </span>
    //               </Dropdown.Item>
    //               <Dropdown.Item>
    //                 <span onClick={()=> modalValueChange("agent")}>Agent Login</span>
    //               </Dropdown.Item>
    //               <Dropdown.Item>
    //                 <span onClick={()=> modalValueChange("guide")}>Guide Login</span>
    //               </Dropdown.Item>
    //             </Dropdown.Menu>
    //           </Dropdown>
    //         </div>
    //         <div className="burgerIcon">
    //           <Dropdown>
    //             <Dropdown.Toggle id="dropdown-basic">
    //               <AiOutlineMenu />
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu>
    //               <Dropdown.Item>
    //                 <Link to="/find-tour">Find A Tour</Link>
    //               </Dropdown.Item>
    //               <Dropdown.Item>
    //                 <Link to="/walking-tour">Walking Tour</Link>
    //               </Dropdown.Item>
    //               <Dropdown.Item>
    //                 <Link to="/bike-tour">Bike Tour</Link>
    //               </Dropdown.Item>
    //               <Dropdown.Item>
    //                 <Link to="/food-tour">Food Tour</Link>
    //               </Dropdown.Item>
    //             </Dropdown.Menu>
    //           </Dropdown>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Login show={modalShow} onHide={() => setModalShow(false)} modalname = {modalName} />
    // </div>
  );
};

export default Navbar;
