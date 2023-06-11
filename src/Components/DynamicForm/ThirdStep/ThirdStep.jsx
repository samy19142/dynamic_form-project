import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import "./ThirdStep.css";
import { useState } from "react";
import Resume from "../Resume/Resume";

const ThirdStep = () => {
  const [modal, setModal] = useState(false);

  const onChangeComment = (e) => {
    const comment = e.target.value;
    localStorage.setItem("comment", comment);
  };

  const handleCloseModal=()=>setModal(false);

  console.log(modal);
  return (
    <div>
      <h2>Do you want add any comment?</h2>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment"
                onChange={(e) => onChangeComment(e)}
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => setModal(true)}>
            View result 🙌
          </p>
        </div>

        {modal && (
          <Resume showModal={modal} handleCloseModal={handleCloseModal}/>
        )}
      </Container>
    </div>
  );
};

export default ThirdStep;
