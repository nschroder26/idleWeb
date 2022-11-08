import { Fragment } from "react";
import { auth } from "../../components/Utils/firebase";
import CharCard from "../../components/CharCard/charCard";

const Character = () => {
  return (
    <Fragment>
      <div>{auth.currentUser.uid}</div>
      <CharCard />
    </Fragment>
  );
};

export default Character;
