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
import { Moment } from 'moment';
import locale from 'antd/es/date-picker/locale/ko_KR';

type PostProps = {
  imgUrl: any;
  onSubmit: () => void;
  onCancel: () => void;
  onChangeField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (value: string) => void;
  onDateChange: (value: Moment | null) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Post = ({
  imgUrl,
  onSubmit,
  onCancel,
  onChangeField,
  onSelect,
  onDateChange,
  onFileChange,
}: PostProps) => {
  const { Option } = Select;
  const monthFormat = 'YYYY/MM';
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={14}>
          <PageHeader onBack={() => {}} title={<Space>목업 등록</Space>} />
          <Descriptions layout="vertical" bordered column={1}>
            <Descriptions.Item label="이미지 등록">
              <figure style={{ textAlign: 'center' }}>
                <img src={imgUrl} alt="" />
              </figure>
              <Input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                required
              />
            </Descriptions.Item>
            <Descriptions.Item label="시안 종류">
              <Select
                defaultValue="시안 종류를 선택해주세요."
                style={{ width: '100%' }}
                onChange={onSelect}>
                <Option value="brochure">브로셔</Option>
                <Option value="catalogue">카달로그</Option>
                <Option value="leaflet">리플렛</Option>
                <Option value="etc">기타</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="작업자">
              <Input type="text" name="manager" onChange={onChangeField} />
            </Descriptions.Item>
            <Descriptions.Item label="작업 날짜">
              <DatePicker
                name="workDate"
                picker="month"
                locale={locale}
                onChange={onDateChange}
                format={monthFormat}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '1rem' }}>
        <Col xs={24} lg={14}>
          <Button onClick={onSubmit}>등록</Button>
          <Button onClick={onCancel} danger style={{ marginLeft: '0.5rem' }}>
            취소
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Post;
