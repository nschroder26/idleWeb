import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../Utils/firebase";

import classes from "./LoginForm.module.css";
import Link from "next/link";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();

  const loginUser = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        enteredEmail,
        enteredPassword
      );
      dispatch(authActions.loginUser());
    } catch (error) {
      console.log(error.message);
    }
    router.push("/character");
  };

  return (
    <Card className={classes.cardform}>
      <Form className={classes.form} onSubmit={loginUser}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailInputRef} />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordInputRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link href="/register" className={classes.register}>
          Register
        </Link>
      </Form>
    </Card>
  );
};

export default LoginForm;
