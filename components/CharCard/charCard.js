import { Card, Container, Row, Col } from "react-bootstrap";

import classes from "./charCard.module.css";

const CharCard = (props) => {
  return (
    <Card className={classes.charCard}>
      <h2 className={classes.charName}>{props.name}</h2>
      <Container>
        <Row>
          <Col>
            <img className={classes.charIcon} src={props.icon} />
          </Col>
          <Col>
            <Col className={classes.stats}>Attack: {props.attack}</Col>
            <Col className={classes.stats}>Defense: {props.defense}</Col>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CharCard;
