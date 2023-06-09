import { Col, Container, Form, Row } from "react-bootstrap";
import "./SecondStep.css"

import { useState } from "react";
import Select from "react-select";


const options = [
    { id: 1, value: "football", label: "Football ⚽" },
    { id: 2, value: "computer", label: "Computer 💻" },
    { id: 3, value: "play", label: "Play 🎮" },
    { id: 4, value: "music", label: "Play Music 🎼" },
    { id: 5, value: "photo", label: "Photography 📷" },
    { id: 6, value: "swim", label: "Swim 🥽" },
    { id: 7, value: "run", label: "Run 👟" },
  ];

const SecondStep=()=>{
const [selectOption,setSelectOption]=useState(null);

const hobbies = JSON.stringify(selectOption);
localStorage.setItem("hobbies",hobbies);

const onChangeAdditionalHobbie =(e)=>{
    const sport =e.target.value;
    localStorage.setItem("adittionalHobbie",sport);
}

    return (
        <div>Select your favourite sport
        <h4>Tell me about your hobbies</h4>
        <Container className="p-5 text-center">
            <Row className="justify-content-md-center">
                <Col lg="7">
                    <h5>Select your hobbies</h5>
                   <Select
                    defaultValue={selectOption}
                    onChange={setSelectOption}
                    options={options}
                    isSearchable
                    isMulti
                   />
                </Col>
                <Col lg="7" className="mt-4">
                    <h5>Do you want to add more?</h5>
                    <Form.Control type="text" placeholder="Karate" onChange={(e)=>onChangeAdditionalHobbie(e)}></Form.Control>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default SecondStep;