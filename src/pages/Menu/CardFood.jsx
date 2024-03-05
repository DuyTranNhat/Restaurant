import { Card } from "react-bootstrap";

function CardFood({ itemBreakFast }) {
  return (
    <Card className="border-0">
      <Card.Body>
        <Card.Title className="text-center fs-3 ">
          {itemBreakFast.name}
        </Card.Title>
        <Card.Text className="text-center fs-5">
          {itemBreakFast.description}
        </Card.Text>
        <Card.Text className="text-center text-success fs-3 fw-bold">{itemBreakFast.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardFood;
