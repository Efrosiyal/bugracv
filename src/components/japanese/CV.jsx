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
              <h2>履歴書</h2>
            </Card.Header>
            <Card.Body>
              <h4 className="mb-3">学歴</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>小学校: オスマン・チナル小学校</h5>
                  <p>学年: 1,2,3年 - 2008-2011</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>中学校: アタテュルク中学校</h5>
                  <p>学年: 4,5,6,7,8年 - 2011-2015</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>高校: メンデレス・アナトリア高校</h5>
                  <p>学年: 9年 - 2015-2016</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>高校: ギュルセファ・カパンジュオール・アナトリア高校</h5>
                  <p>学年: 10年 - 2016-2017</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>高校: ムスタファ・ケマル・アナトリア高校</h5>
                  <p>学年: 10,11年 - 2016-2018</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>高校: 通信制高校</h5>
                  <p>学年: 12年 - 2018-2019</p>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>大学: エルズィンジャン・ビナリ・ユルドゥルム大学</h5>
                  <p>学部: コンピューター工学 - 2019年9月20日-2025年7月6日</p>
                </ListGroup.Item>
              </ListGroup>

              <h4 className="mb-3 mt-4">職務経験</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent text-white">
                  <h5>会社名: ピア・ビリシム</h5>
                  <p>職種: インターン（1ヶ月） - 2022年8月1日-2022年8月28日</p>
                  <p>仕事内容と責任: アジャイルプロジェクトに積極的に参加しました。テスターとしてインターンをしました。学んだことは、業務分析、アジャイル手法、アジャイルプロジェクト管理、テスト、テスト自動化、ストレステストなどの様々なテスト技術です。</p>
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
