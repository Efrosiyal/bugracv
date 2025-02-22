import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Certificates() {
  return (
    <Container fluid className="min-vh-100 py-5"
      style={{
        backgroundImage: 'url(../../image/background.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Row className="g-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100 bg-dark text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>3D Game Development with Unity</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-83">Certificate No: 4qguZoyzDA</Card.Subtitle>
              <Card.Text>
              I learned how to design levels in Unity 3D and use C# to create functional game mechanics.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-90">
                Date Received: 15.08.2024
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Web Programming with React</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-83">Certificate No: ZA1UMGDoZx</Card.Subtitle>
              <Card.Text>
              I learned web development with React from beginner to advanced level.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-90">
                Date Received: 29.01.2025
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Introduction to Digital Game Development with Unity</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: WJ1SMylDez</Card.Subtitle>
              <Card.Text>
              I learned the basic and intermediate knowledge needed to start developing digital games using Unity.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: 27.01.2025
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Software Test Automation</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: xr4t0GelB7</Card.Subtitle>
              <Card.Text>
              I learned the basics of test automation, its role in the testing process, test automation architecture, and how to set up an example project.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: 08.08.2022
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Photoshop</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: IEEE (Necmettin Erbakan University)</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: 96515287235686</Card.Subtitle>
              <Card.Text>
              I gained intermediate-level knowledge about Photoshop.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: 11.03.2022
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>DevOps Solutions (Jenkins)</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: 9XrtqD464Y</Card.Subtitle>
              <Card.Text>
              I learned the basics of Agile methodology, CI/CD, and Docker. I also gained basic knowledge of Jenkins, including its setup, usage, and components.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: 16.08.2022
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>API and API Testing</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: BTK Academy</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: BozfGbxzBD</Card.Subtitle>
              <Card.Text>
              I learned about API web services and functions, as well as testing tools, their features, and how to use them effectively.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: 15.08.2022
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Chess</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">Institution: Ministry of National Education</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">Certificate No: 97037120090008236203</Card.Subtitle>
              <Card.Text>
              I learned chess from the basics to an intermediate playing level.
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                Date Received: x.06.2010
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Certificates;