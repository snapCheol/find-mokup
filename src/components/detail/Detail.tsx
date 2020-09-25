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
import { MokupReqType } from '../../types/write';

type DetailProps = {
  goBack: () => void;
  post: MokupReqType | null;
  loading: boolean;
  error: Error | null;
};

const Detail = ({ post, loading, error, goBack }: DetailProps) => {
  if (loading || !post) return null;
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={14}>
          <PageHeader onBack={goBack} title={<Space>목업 상세</Space>} />
          <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label={post.title}>
              <figure
                style={{
                  textAlign: 'center',
                  maxWidth: '400px',
                  margin: '0 auto',
                }}>
                <img src={post.imgUrl} alt="" style={{ maxWidth: '100%' }} />
              </figure>
            </Descriptions.Item>
            <Descriptions.Item label="시안 종류">
              <Typography.Text>{post.category}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="작업자">
              <Typography.Text>{post.manager}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="작업 날짜">
              <Typography.Text>{post.date}</Typography.Text>
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
