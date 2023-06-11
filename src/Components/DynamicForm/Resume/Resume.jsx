import { CardGroup, Modal } from "react-bootstrap";

const Resume =({showModal,handleCloseModal})=>{
    return (
        <Modal
            show={showModal}
            onHide={handleCloseModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
                Congratulations! 🥳🎉🎉
            </Modal.Header>
            <Modal.Body>
                <h4>Here you are your resume</h4>
                <CardGroup className="mt-4">


                </CardGroup>
            </Modal.Body>
          </Modal>
    )
}

export default Resume;