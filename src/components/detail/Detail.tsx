import {
  Button,
  Col,
  Descriptions,
  PageHeader,
  Row,
  Space,
  Typography,
} from 'antd';
import React from 'react';

const Detail = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={14}>
          <PageHeader onBack={() => {}} title={<Space>목업 상세</Space>} />
          <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label="KC 대학교 리플릿">
              <figure style={{ textAlign: 'center' }}>
                <img
                  src="https://via.placeholder.com/200C/O https://placeholder.com/"
                  alt=""
                />
              </figure>
            </Descriptions.Item>
            <Descriptions.Item label="시안 종류">
              <Typography.Text>리플렛</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="작업자">
              <Typography.Text>김민철</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="작업 날짜">
              <Typography.Text>2020-09-14</Typography.Text>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '1rem' }}>
        <Col xs={24} lg={14}>
          <Button>수정</Button>
          <Button danger style={{ marginLeft: '0.5rem' }}>
            삭제
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Detail;
