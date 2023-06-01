import { Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

const Introduction =()=>{
    return(
        <div className="introduction p-3 plg-5 mt-5">
            <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <h1 className="pl-2 text-center">
                    Welcome to dynamic form {' '}
                    <span className="pt-2 pb-4 ">that you will do everything that you want</span>
                    </h1>
                </Col>
            </Row>

            </Container>
        </div>
    )
};

export default Introduction;