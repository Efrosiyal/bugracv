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
              <h2>自己紹介</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h3>こんにちは、アフメット・ブーグラ・カディオールです</h3>
                <p>私はテクノロジーとゲームの世界に興味があり、ソフトウェア開発やグラフィックデザインなどの創造的な分野でスキルを高めようとしています。</p>
                <p>React、JavaScript、CSS、C#、C++を使って自分を成長させようとしています。また、ゲーム開発やアニメーションに関する研究も行っています。</p>
                <p>ゲーム開発には大きな目標があります。自分のゲームを作りたいと思っています。そのため、BlenderとUnreal Engineに集中し始めました。Unityを使って2Dプラットフォームゲームを作りました。この過程でキャラクターアニメーションやゲームメカニクス、声の録音など多くのことを学びました。</p>
                <p>特に2Dと3Dのモデリングに興味があります。また、VTuberキャラクターの作成にも詳しいです。</p>
                <p>私のテクノロジープロジェクトはゲームに限りません。Raspberry Piを使って手話認識プロジェクトを進めています。そのために、画像処理技術を研究しています。このプロジェクトではMediaPipeを使ってジェスチャー認識に取り組んでおり、システムが完全に独立して動作することを目指しています。</p>
                <p>ゲームも好きです。現在、Hearts of Iron IVとDead by Daylightをプレイしています。特に戦略ゲームが好きです。</p>
                <p>テクノロジー、ゲーム開発、アニメーション分野で常に自分を成長させ続けたいと思っています。新しい技術を学び、ソフトウェアプロジェクトを作り、ゲームの世界で足跡を残したいです。</p>
              </Card.Text>

              <div className="mt-4">
                <h4 className="mb-3">連絡先 & ソーシャルメディア</h4>
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
