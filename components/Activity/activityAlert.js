import { getDatabase, remove, ref, onValue } from "firebase/database";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import classes from "./activityAlert.module.css";
import { auth } from "../../components/Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ActivityAlert = (props) => {
  const alertId = props.id;
  const db = getDatabase();

  //remove alert from activity feed
  const deleteAlert = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        const alertItem = ref(db, "/Users/" + userId + "/alerts/" + alertId);
        remove(alertItem);
      }
    });
  };

  return (
    <Card className={classes.alertCard}>
      <Container>
        <Row>
          <Col className={classes.alertCol}>
            <Card.Text className={classes.alertText}>{props.message}</Card.Text>
          </Col>
          <Col md="auto">
            <Button
              variant="outline-light"
              size="sm"
              className={classes.alertDismiss}
              aria-label="Close"
              onClick={deleteAlert}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ActivityAlert;
