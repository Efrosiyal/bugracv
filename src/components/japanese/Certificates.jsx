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
              <Card.Title>Unityによる3Dゲーム開発</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-83">証明書番号: 4qguZoyzDA</Card.Subtitle>
              <Card.Text>
                Unityを使って3D空間を理解し、C#を使ってその視覚的なプロセスを実行可能な形に変換する方法を学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-90">
                取得日: 2024年8月15日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>REACTによるウェブプログラミング</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-83">証明書番号: ZA1UMGDoZx</Card.Subtitle>
              <Card.Text>
                Reactを使用してウェブ開発を基礎から上級まで学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-90">
                取得日: 2025年1月29日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Unityによるデジタルゲーム開発入門</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: WJ1SMylDez</Card.Subtitle>
              <Card.Text>
                Unityを使ってデジタルゲーム開発を始めるために必要な基本的な知識と中級のスキルを学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: 2025年1月27日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>ソフトウェアテスト自動化</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: xr4t0GelB7</Card.Subtitle>
              <Card.Text>
                テスト自動化の基本的な知識、テストプロセスにおけるテスト自動化の位置付け、テスト自動化アーキテクチャの作成、サンプルプロジェクトの構築、そして自動化コード作成の実践を学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: 2022年8月8日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>Photoshop</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: IEEE（ネクメッティン・エルバカン大学）</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: 96515287235686</Card.Subtitle>
              <Card.Text>
                中級レベルのPhotoshopの知識を習得しました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: 2022年3月11日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>DevOpsソリューション（Jenkins）</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: 9XrtqD464Y</Card.Subtitle>
              <Card.Text>
                アジャイル手法、CI/CD、Dockerに関する基本的な知識を得て、DockerとMavenを使った基本的なソリューション、Jenkins CI/CD製品のインストールと使用方法、および自分のCI/CDプロセスを設計するための基本的なスキルを習得しました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: 2022年8月16日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>APIとAPIテスト</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: BTKアカデミー</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: BozfGbxzBD</Card.Subtitle>
              <Card.Text>
                APIウェブサービスとその機能について学び、テストツール、ツールの機能、使用方法について必要な技術的および理論的な知識を得て、それを実際に応用する方法を学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: 2022年8月15日
              </Card.Footer>
            </Card.Body>
            <Card.Body>
              <Card.Title>チェス</Card.Title>
              <Card.Subtitle className="mb-2 text-light opacity-75">機関: 国家教育省</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-light opacity-65">証明書番号: 97037120090008236203</Card.Subtitle>
              <Card.Text>
                チェスの基本から中級者のプレイ方法まで学びました。
              </Card.Text>
              <Card.Footer className="mb-2 text-light opacity-55">
                取得日: x.06.2010
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Certificates;
