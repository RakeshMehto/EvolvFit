import React, { Component } from "react";
import Logo from "./EvolvLogo.png";
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
        </div>
      </Navbar>
    );
  }
}

export default Nav;
