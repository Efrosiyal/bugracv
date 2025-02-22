import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function CV() {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url(../../image/background.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <Card className="bg-dark text-white bg-opacity-75">
            <Card.Header className="text-center border-bottom border-light">
              <h2>CV</h2>
            </Card.Header>
            <Card.Body>
              <h4 className="mb-3">Education</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Primary School: Osman Çınar Primary School</h5>
                  <p>Grade: 1,2,3 - 2008-2011</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Middle School: Atatürk Middle School</h5>
                  <p>Grade: 4,5,6,7,8 - 2011-2015</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>High School: Menderes Anatolian High School</h5>
                  <p>Grade: 9 - 2015-2016</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>High School: Gülsefa Kapancıoğlu Anatolian High School</h5>
                  <p>Grade: 10 - 2016-2017</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>High School: Mustafa Kemal Anatolian High School</h5>
                  <p>Grade: 10,11 - 2016-2018</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>High School: Open High School</h5>
                  <p>Grade: 12 - 2018-2019</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>University: Erzincan Binali Yıldırım University</h5>
                  <p>Department: Computer Engineering - 20.09.2019-06.07.2025</p>
                </ListGroup.Item>
              </ListGroup>

              <h4 className="mb-3 mt-4">Work Experience</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Company: Pia Bilişim</h5>
                  <p>Position: Intern (1 month) - 01.08.2022-28.08.2022</p>
                  <p>Job description and responsibilities: I worked actively in an Agile project. I did my internship as a Tester. I learned many things like Business Analysis, Agile Methods, Agile Project Management, Testing, Test Automation, Stress Test, and other testing techniques with practice.</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
