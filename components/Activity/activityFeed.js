import { Card } from "react-bootstrap";
import ActivityAlert from "./activityAlert";
import { useState, useEffect } from "react";
import { auth } from "../../components/Utils/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import classes from "./activityFeed.module.css";

const ActivityFeed = () => {
  const db = getDatabase();
  const [userAlerts, setUserAlerts] = useState();
  const alerts = [];

  //captures current user from firebase db
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        const alertData = ref(db, "/Users/" + userId + "/alerts");
        onValue(alertData, (snapshot) => {
          const data = snapshot.val();
          setUserAlerts(data);
        });
      }
    });
  }, []);

  const currentAlerts = userAlerts.map((alert) => (
    <ActivityAlert key={alert.id} message={alert.message} />
  ));

  return (
    <Card bg="dark" className={classes.feedCard}>
      <Card.Title className={classes.feedTitle}>Recent Activity</Card.Title>
      <ul>{currentAlerts}</ul>
    </Card>
  );
};

export default ActivityFeed;
