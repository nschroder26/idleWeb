import store from "../../components/Store/index";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import CharCard from "../../components/CharCard/charCard";

const Character = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <Fragment>
      <div>{userId}</div>
      <CharCard />
    </Fragment>
  );
};

export default Character;
