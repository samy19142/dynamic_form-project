import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

const Resume = ({ showModal, handleCloseModal,setStep }) => {
  const favouriteFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("iconFruit");
  const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies"));
  const adittionalHobbie = localStorage.getItem("adittionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm =()=>{
    localStorage.clear();
    handleCloseModal();
    setStep(1);
  }
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Congratulations! 🥳🎉🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Here you are your resume</h4>
        <CardGroup className="mt-4">
          {favouriteFruit && fruitIcon && (
            <CardResume
              title={fruitIcon}
              subtitle={"Your favourite fruit is"}
              text={favouriteFruit}
            />
          )}
          {hobbiesStorage &&(
            <CardResumeHobbies subtitle="Your hobbies" text={adittionalHobbie} hobbiesStorage={hobbiesStorage}/>
          )}
          {comment &&(
            <CardResume subtitle="And for the last this is the comment" text={comment}/>
          )}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={()=>clearForm()}>Exit and clear form</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Resume;
