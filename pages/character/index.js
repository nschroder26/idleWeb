import store from "../../components/Store/index";
import { useSelector } from "react-redux";

const Character = () => {
  const userId = useSelector((state) => state.auth.isLoggedIn);

  return <div>{userId}, test</div>;
};

export default Character;
