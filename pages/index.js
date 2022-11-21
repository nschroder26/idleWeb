import { Fragment } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/Login/LoginForm";

export default function Home() {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <Fragment>{!userLoggedIn && <LoginForm />}</Fragment>;
}
