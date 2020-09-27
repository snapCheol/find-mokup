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
import locale from 'antd/es/date-picker/locale/ko_KR';
import Form from 'antd/lib/form/Form';

type WriteProps = {
  write: any;
  imgUrl: string;
  previewImg: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onChangeField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (value: string) => void;
  onDateChange: (date: moment.Moment | null, dateString: string) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentPostId: string | null;
};

const Post = ({
  write,
  imgUrl,
  previewImg,
  onSubmit,
  onCancel,
  onChangeField,
  onSelect,
  onDateChange,
  onFileChange,
  currentPostId,
}: WriteProps) => {
  const { Option } = Select;
  return (
    <>
      <Form onFinish={onSubmit}>
        <Row justify="center">
          <Col xs={24} lg={14}>
            <PageHeader
              onBack={onCancel}
              title={<Space>목업 {currentPostId ? '수정' : '등록'}</Space>}
            />
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이미지 등록">
                <figure
                  style={{
                    textAlign: 'center',
                    maxWidth: '400px',
                    margin: '0 auto',
                  }}>
                  <img
                    src={currentPostId ? write.imgUrl : previewImg}
                    alt=""
                    style={{ maxWidth: '100%' }}
                  />
                </figure>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  required
                />
              </Descriptions.Item>
              <Descriptions.Item label="제목">
                <Input
                  type="text"
                  name="title"
                  value={write.title}
                  onChange={onChangeField}
                  required
                />
              </Descriptions.Item>
              <Descriptions.Item label="시안 종류">
                <Select
                  defaultValue={
                    currentPostId
                      ? write.category
                      : '시안 카테고리를 선택해주세요'
                  }
                  style={{ width: '100%' }}
                  onChange={onSelect}>
                  <Option value="brochure">브로셔</Option>
                  <Option value="catalogue">카달로그</Option>
                  <Option value="leaflet">리플렛</Option>
                  <Option value="etc">기타</Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="작업자">
                <Input
                  type="text"
                  name="manager"
                  onChange={onChangeField}
                  value={write.manager}
                  required
                />
              </Descriptions.Item>
              <Descriptions.Item label="작업 날짜">
                <DatePicker
                  picker="month"
                  locale={locale}
                  onChange={onDateChange}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '1rem' }}>
          <Col>
            <Button htmlType="submit">등록</Button>
            <Button onClick={onCancel} danger style={{ marginLeft: '0.5rem' }}>
              취소
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Post;
