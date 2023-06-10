import { Card, Col } from "react-bootstrap";
import "./CardService.css";

const CardService =({service})=>{

const {title,subtitle,image,footer,link} =service;

    return(
        <Col className="container-card-service">
            <Card>
            <Card.Img variant="top" src={image} alt={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <a href={link} target="_blank" rel="noreferrer">{footer} ➡️</a>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default CardService;