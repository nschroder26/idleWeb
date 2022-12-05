import { Card } from "react-bootstrap";
import classes from "./activityAlert.module.css";

const ActivityAlert = () => {
  return (
    <Card className={classes.alertCard}>
      <Card.Text className={classes.alertText}>This is an alert</Card.Text>
    </Card>
  );
};

export default ActivityAlert;
