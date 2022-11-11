import { Fragment } from "react";
import { auth } from "../../components/Utils/firebase";
import { database } from "../../components/Utils/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import CharCard from "../../components/CharCard/charCard";

const Character = () => {
  const userId = auth.currentUser.uid;
  const db = getDatabase();
  const userRef = ref(db, "/Users/" + userId);
  let userData = {};

  const setData = (data) => {
    userData = data;
  };

  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });

  return (
    <Fragment>
      <CharCard userData={userData} />
    </Fragment>
  );
};

export default Character;
