import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { NavbarBrand } from "react-bootstrap";

export default function Navigation() {
  const user = useSelector(selectUser);
  const token = user.token;

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <NavbarBrand>
        <b>EAT - DRINK - SOCIALIZE</b>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/reviews" linkText="Latest Reviews" />
          <NavbarItem path="/places" linkText="Places" />
          {token ? <NavbarItem path={`/me`} linkText={user.name} /> : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
