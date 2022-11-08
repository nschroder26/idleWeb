import { Fragment } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";

export default function Home() {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const registerUser = useSelector((state) => state.auth.registerUser);

  return (
    <Fragment>
      {!userLoggedIn && !registerUser && <LoginForm />}
      {registerUser && <RegisterForm />}
    </Fragment>
  );
}
