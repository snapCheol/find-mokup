import React from 'react';
import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Input,
  PageHeader,
  Row,
  Select,
  Space,
} from 'antd';
import moment from 'moment';

const Post = () => {
  const { Option } = Select;
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={14}>
          <PageHeader onBack={() => {}} title={<Space>목업 등록</Space>} />
          <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label="이미지 등록">
              <figure style={{ textAlign: 'center' }}>
                <img
                  src="https://via.placeholder.com/200C/O https://placeholder.com/"
                  alt=""
                />
              </figure>
              <Input type="file" />
            </Descriptions.Item>
            <Descriptions.Item label="시안 종류">
              <Select
                defaultValue="시안 종류를 선택해주세요."
                style={{ width: '100%' }}
                onChange={() => {}}>
                <Option value="brochure">브로셔</Option>
                <Option value="catalogue">카달로그</Option>
                <Option value="leaflet">리플렛</Option>
                <Option value="etc">기타</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="작업자">
              <Input type="text" />
            </Descriptions.Item>
            <Descriptions.Item label="작업 날짜">
              <DatePicker
                picker="month"
                defaultValue={moment('2015-06', 'YYYY-MM')}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '1rem' }}>
        <Col xs={24} lg={14}>
          <Button>등록</Button>
          <Button danger style={{ marginLeft: '0.5rem' }}>
            취소
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Post;
