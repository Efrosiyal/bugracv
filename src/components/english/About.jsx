import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const About = () => {
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
              <h2>About Me</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h3>Hello, I'm Ahmet Buğra Kadıoğlu</h3>
                <p>I am interested in technology and the gaming world. At the same time, I am working on improving myself in software development and graphic design.</p>
                <p>I am trying to improve my skills in React, JavaScript, CSS, C#, and C++. Besides that, I am also researching game development and animation.</p>
                <p>I have big goals in game development. I want to release my own game. That’s why I started focusing on Blender and Unreal Engine. I have developed a 2D platform game using Unity. In this process, I learned a lot about character animations, game mechanics, and voice-over languages.</p>
                <p>I am especially interested in 2D and 3D modeling. I also have knowledge of creating VTuber characters.</p>
                <p>My technology projects are not just about games. I am working on a sign language recognition project using Raspberry Pi and researching image processing techniques. In this project, I use MediaPipe for gesture recognition and aim to make the system fully independent.</p>
                <p>I also love playing games. I actively play Hearts of Iron IV and Dead by Daylight. I mostly enjoy strategy games.</p>
                <p>In general, I am constantly trying to improve myself in technology, game development, and animation. I want to learn new technologies, develop software projects, and leave a mark in the gaming world.</p>
              </Card.Text>

               <div className="mt-4">
                <h4 className="mb-3">Contact & Social Media</h4>
                <div className="d-flex flex-wrap gap-4 justify-content-center">
  
                   <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bgrkadioglu9@gmail.com" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-decoration-none text-light"
                     title="Gmail">
                    <div className="d-flex align-items-center">
                      <MdEmail size={24} className="me-2" />
                      <span>Gmail</span>
                    </div>
                  </a>
                  <a href="https://wa.me/905533052252" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-light"
                     title="WhatsApp">
                    <div className="d-flex align-items-center">
                      <FaWhatsapp size={24} className="me-2" />
                      <span>WhatsApp</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/ahmet-bu%C4%9Fra-kad%C4%B1o%C4%9Flu-21065923b/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-light"
                     title="LinkedIn">
                    <div className="d-flex align-items-center">
                      <FaLinkedin size={24} className="me-2" />
                      <span>LinkedIn</span>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/bugra.kadioglu" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-light"
                     title="Instagram">
                    <div className="d-flex align-items-center">
                      <FaInstagram size={24} className="me-2" />
                      <span>Instagram</span>
                    </div>
                  </a>
                  <a href="https://twitter.com/bugrakadioglu...-?s=09" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-light"
                     title="Twitter">
                    <div className="d-flex align-items-center">
                      <FaTwitter size={24} className="me-2" />
                      <span>Twitter</span>
                    </div>
                  </a>
                  <a href="https://t.me/Efrosiyal" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-light"
                     title="Telegram">
                    <div className="d-flex align-items-center">
                      <FaTelegram size={24} className="me-2" />
                      <span>Telegram</span>
                    </div>
                  </a>
                </div>
              </div>

              <style>
                {`
                  a:hover {
                    opacity: 0.8;
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                  }
                `}
              </style>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
