import { Card } from "react-bootstrap";
import ActivityAlert from "./activityAlert";
import { useState, useEffect } from "react";
import { auth } from "../../components/Utils/firebase";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import classes from "./activityFeed.module.css";

const ActivityFeed = () => {
  const db = getDatabase();
  const [userAlerts, setUserAlerts] = useState();

  //temp function, adds alert list for testing
  const createAlerts = () => {
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    update(ref(db, "/Users/" + userId), {
      alerts: {
        1: {
          id: 1,
          message: "first",
        },
        2: {
          id: 2,
          message: "second",
        },
        3: {
          id: 3,
          message: "third",
        },
      },
    });
  };

  //captures current user alerts from firebase db
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        const alertData = ref(db, "/Users/" + userId + "/alerts");
        onValue(alertData, (snapshot) => {
          const data = snapshot.val();
          if (data === null) {
            setUserAlerts(data);
          } else {
            const transData = Object.values(data);
            setUserAlerts(transData);
          }
        });
      }
    });
  }, []);

  //maps current alerts for display
  const currentAlerts = userAlerts?.map((alert) => (
    <ActivityAlert id={alert.id} message={alert.message} />
  ));

  return (
    <Card bg="dark" className={classes.feedCard}>
      <button onClick={createAlerts}>Create</button>
      <Card.Title className={classes.feedTitle}>Recent Activity</Card.Title>
      {currentAlerts && <ul>{currentAlerts}</ul>}
      {!currentAlerts && (
        <p className={classes.feedMessage}>No Recent Activity</p>
      )}
    </Card>
  );
};

export default ActivityFeed;
