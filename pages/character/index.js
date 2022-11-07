import store from "../../components/Store/index";
import { useSelector } from "react-redux";

const Character = () => {
  const userId = useSelector((state) => state.auth.userId);

  return <div>{userId}</div>;
};

export default Character;
