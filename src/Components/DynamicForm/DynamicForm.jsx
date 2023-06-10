import { useState } from "react";
import { Container } from "react-bootstrap";
import "./DynamicForm.css";

const DynamicForm = () => {
    const[step,setStep]=useState(1);

    const showNextStep=()=>{
        setStep(step+1);
    }
    const showPreviewStep=()=>{
        if (step===1) return;
        setStep(step-1);
    }



  return (
    <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
      <Container className="text-center p-4">
        <div className="content-dynamic-form mt-5 p-4">
          <h1 className="title-dynamic-form">Fill the form</h1>
          <p className="step-numbers">Step {step} of 3</p>

          <div className="actions">
            <div className="container-text">
              <p
                className="before"
                onClick={showPreviewStep}
              >
                Before Step
              </p>
            </div>

            <div className="container-text">
              <p
                className="next"
                onClick={showNextStep}
              >
                Before Step
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DynamicForm;
