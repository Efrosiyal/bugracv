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
              <h2>Özgeçmiş</h2>
            </Card.Header>
            <Card.Body>
              <h4 className="mb-3">Eğitim</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>İlkokul: Osman Çınar İlköğretim Okulu</h5>
                  <p>Sınıf: 1,2,3.sınıf - 2008-2011</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Ortaokul: Atatürk Orta Okulu</h5>
                  <p>Sınıf: 4,5,6,7,8.sınıf - 2011-2015</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Lise : Menderes Anadolu Lisesi</h5>
                  <p>Sınıf: 9.sınıf - 2015-2016</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Lise : Gülsefa Kapancıoğlu Anadolu Lisesi</h5>
                  <p>Sınıf: 10.sınıf - 2016-2017</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Lise : Mustafa Kemal Anadolu Lisesi</h5>
                  <p>Sınıf: 10,11.sınıf - 2016-2018</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Lise : Açık Lise</h5>
                  <p>Sınıf: 12.sınıf - 2018-2019</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Üniversite Adı: Erzincan Binali Yıldırım Üniversitesi</h5>
                  <p>Bölüm : Bilgisayar Mühendisliği - 20.09.2019-06.07.2025</p>
                </ListGroup.Item>
              </ListGroup>

              <h4 className="mb-3 mt-4">İş Deneyimi</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>Şirket Adı: Pia Bilişim</h5>
                  <p>Pozisyon: Stajyer 1 ay - 01.08.2022-28.08.2022</p>
                  <p>İş tanımı ve sorumluluklar: Bir Agile projesinde aktif olarak çalıştım. Bir Tester olarak staj yaptım. Öğrendiğim şeyler; İş Analizi, Agile Metotları, Agile Proje Yönetimi, Tester, Test Otomasyonu, Stress Test vb. test seçeneklerin hepsini uygulamalı olarak öğrendim.</p>
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