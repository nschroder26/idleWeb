import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useRouter } from "next/router";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmedInputRef = useRef();
  const router = useRouter();

  const registerUser = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmedPassword = confirmedInputRef.current.value;

    if (enteredPassword === confirmedPassword) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        dispatch(authActions.loginUser());
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("Your passwords do not match");
    }
    router.push("/character");
  };

  return (
    <Card className={classes.cardform}>
      <Form className={classes.form} onSubmit={registerUser}>
        <Form.Group className="mb-2" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailInputRef} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordInputRef} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="confirmedPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" ref={confirmedInputRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default RegisterForm;
