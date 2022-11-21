import RegisterForm from "../../components/Register/RegisterForm";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import ProfileCreation from "../../components/Register/ProfileCreation";

const Register = () => {
  const userRegistering = useSelector((state) => state.auth.isRegistering);
  return (
    <Fragment>
      {!userRegistering && <RegisterForm />}{" "}
      {userRegistering && <ProfileCreation />}
    </Fragment>
  );
};

export default Register;
