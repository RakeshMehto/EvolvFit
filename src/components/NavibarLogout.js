import React, { Component } from "react";
import "../App.css";
import Logo from "./EvolvLogo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
class Nav extends Component {
  render() {
    return (
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">
            <img src={Logo} height="45" width="105" alt="evolvLogo" />
          </NavbarBrand>

          <button className="logout">
            <Link to="/home">Logout</Link>
          </button>
        </div>
      </Navbar>
    );
  }
}

export default Nav;
