import { Button, Card, Col, Container, Row } from "react-bootstrap";
import classes from "./activityAlert.module.css";

const ActivityAlert = (props) => {
  return (
    <Card className={classes.alertCard}>
      <Container>
        <Row>
          <Col className={classes.alertCol}>
            <Card.Text className={classes.alertText}>{props.message}</Card.Text>
          </Col>
          <Col md="auto">
            <Button
              variant="outline-dark"
              size="sm"
              className={classes.alertDismiss}
              aria-label="Close"
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
