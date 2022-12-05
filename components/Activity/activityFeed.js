import { Card } from "react-bootstrap";
import ActivityAlert from "./activityAlert";

import classes from "./activityFeed.module.css";

const ActivityFeed = () => {
  return (
    <Card bg="dark" className={classes.feedCard}>
      <Card.Title className={classes.feedTitle}>Recent Activity</Card.Title>
      <ActivityAlert />
    </Card>
  );
};

export default ActivityFeed;
