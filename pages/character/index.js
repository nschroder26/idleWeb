import { Fragment, useState, useEffect } from "react";
import { auth } from "../../components/Utils/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import CharCard from "../../components/CharCard/charCard";

const Character = () => {
  const userId = auth.currentUser.uid;
  const db = getDatabase();
  const [userData, setUserData] = useState([]);

  //caputures current user from firebase db
  useEffect(() => {
    const userRef = ref(db, "/Users/" + userId);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, []);

  return (
    <Fragment>
      <CharCard
        name={userData.name}
        icon={userData.icon}
        attack={userData.skills.attack.level}
        defense={userData.skills.defense.level}
      />
    </Fragment>
  );
};

export default Character;
