import { Card } from "react-bootstrap";

import classes from "./skillsCard.module.css";

const SkillsCard = () => {
  return (
    <Card className={classes.skillsCard}>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Level 1</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
