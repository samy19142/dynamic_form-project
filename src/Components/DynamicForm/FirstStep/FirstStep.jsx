import { Container, Row } from "react-bootstrap";
import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { useState } from "react";

export const fruits = [
  {
    id: 1,
    icon: "🍎",
    name: "Apple",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    id: 2,
    icon: "🍌",
    name: "Banana",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    id: 3,
    icon: "🍓",
    name: "Strawberry",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    id: 4,
    icon: "🍍",
    name: "Pineapple",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    id: 5,
    icon: "🍇",
    name: "Grapes",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    id: 6,
    icon: "🍊",
    name: "Orange",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
  },
];

const FirstStep = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem("fruitName",fruit.name)
    localStorage.setItem("iconFruit",fruit.icon)
  };
  //console.log(selectedCard)
  return (
    <div>
      <h2>Choose your favorite fruit</h2>
      <h4>Select your fruit and then click the button of "Next step"</h4>
      <Container>
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FirstStep;
