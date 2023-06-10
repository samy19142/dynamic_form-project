import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/react js.png"
import imgCourse2 from "../../assets/netcore vs netframework.png"
import imgCourse3 from "../../assets/arduino.png"
import CardService from "./CardService/CardService";

const Services = () => {
    const servicesArray =[{
        title:"React JS",
        subtitle:"Learn all about this great and powerfull framework",
        image:imgCourse1,
        footer:"Go to the Course",
        link:"#!"
    },{
        title:".Net and .Net Framework",
        subtitle:"Learn how to build amazing and powerful applications with .Net and .NetCore",
        image:imgCourse2,
        footer:"Go to the Course",
        link:"#!"
    },{
        title:"Arduino",
        subtitle:"Learn all about this great and powerfull framework",
        image:imgCourse3,
        footer:"Go to the Course",
        link:"#!"
    }
        
    ]
    
  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}></Col>
          <h2 className="text-center">Services</h2>
          <h4 className="pb-3 text-center">
            Check some of my services that i did
          </h4>
          <Row xs={1} md={3} className="g-4 mt-4">
          {servicesArray.map((service,index)=>(
            <CardService service={service} key={index}/>
          ))}
          

          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
