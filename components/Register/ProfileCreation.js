import { useRef } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../Utils/firebase";
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";

import classes from "./ProfileCreation.module.css";
import { async } from "@firebase/util";

const ProfileCreation = () => {
  const characterNameRef = useRef();
  const router = useRouter();

  const createDatabaseUser = async (event) => {
    event.preventDefault();
    const enteredCharacterName = characterNameRef.current.value;
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    set(ref(db, "/Users/" + userId), {
      icon: "crossedswords.png",
      name: enteredCharacterName,
      skills: {
        attack: { level: 1, name: "Attack" },
        defense: { level: 1, name: "Defense" },
        firemaking: { level: 1, name: "Firemaking" },
        fishing: { level: 1, name: "Fishing" },
        mining: { level: 1, name: "Mining" },
        smithing: { level: 1, name: "Smithing" },
        woodcutting: { level: 1, name: "Woodcutting" },
      },
    });

    router.push("/character");
  };

  return (
    <Card className={classes.cardform}>
      <Form className={classes.form} onSubmit={createDatabaseUser}>
        <Form.Group className="mb-2" controlId="formEmail">
          <Form.Label>Character Name</Form.Label>
          <Form.Control type="text" ref={characterNameRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </Card>
  );
};

export default ProfileCreation;
