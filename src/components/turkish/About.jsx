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
              <h2>Hakkımda</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h3>Merhaba, ben Ahmet Buğra Kadıoğlu</h3>
                <p>Ben teknoloji ve oyun dünyasına ilgi duyan, aynı zamanda yazılım geliştirme ve grafik tasarım gibi yaratıcı alanlarda kendini geliştirmeye çalışan biriyim.</p>
                <p>Kendimi React, Javascript, CSS, C# ve C++ da kendimi geliştirmeye çalışıyorum. Bunun yanı sıra, oyun geliştirme ve animasyon konularında da araştırmalar yapıyorum. </p>
                <p>Oyun geliştirme konusunda büyük hedeflerim var. Kendi oyunumu çıkarmak istiyorum. Bu yüzden Blender ve Unreal Engine üzerine yoğunlaşmaya başladım. Unity kullanarak 2D bir platform oyunu yaptım. Bu süreçte karakter animasyonları, oyun mekaniği ve seslendirme dilleri gibi birçok detayı öğrendim.</p>
                <p>Özellikle 2D ve 3D modelleme ile ilgileniyorum. Ayrıca VTuber karakterleri oluşturma konusunda da bilgim var.</p>
                <p>Teknoloji projeleri sadece oyunla sınırlı değil. Raspberry Pi kullanarak işaret dili algılama projesi yapıyorum ve bunun için görüntü işleme tekniklerini araştırıyorum. Bu projemde MediaPipe kullanarak jest tanıma üzerine çalışıyorum ve sistemin tamamen bağımsız çalışmasını hedefliyorum.</p>
                <p>Oyun oynamayı da seviyorum. Aktif olarak Hearts of Iron IV ve Dead by Daylight oynuyorum. Daha çok strateji oyunlarını seviyorum.</p>
                <p>Genel olarak teknoloji, oyun geliştirme ve animasyon alanlarında kendimi sürekli geliştirmeye çalışıyorum. Yeni teknolojiler öğrenmek, yazılım projeleri üretmek ve oyun dünyasında iz bırakmak istiyorum</p>
              </Card.Text>

               <div className="mt-4">
                <h4 className="mb-3">İletişim & Sosyal Medya</h4>
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