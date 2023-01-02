import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth-slice";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Fragment } from "react";

import classes from "./MyNavbar.module.css";

const MyNavbar = () => {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutUserHandler = () => {
    dispatch(authActions.logoutUser());
    router.push("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={classes.navbar}
    >
      <Container>
        <Link href="/" className={classes.logo}>
          idleWeb
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {!userLoggedIn && (
              <Link href="/" className={classes.navlink}>
                Login
              </Link>
            )}
            {userLoggedIn && (
              <Fragment>
                <Link href="/character" className={classes.navlink}>
                  Overview
                </Link>
                <Link href="/skills" className={classes.navlink}>
                  Refining
                </Link>
                <Link href="/raid" className={classes.navlink}>
                  Crafting
                </Link>
                <Link
                  href="/"
                  className={classes.navlink}
                  onClick={logoutUserHandler}
                >
                  Logout
                </Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
