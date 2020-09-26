import {
  Button,
  Col,
  Descriptions,
  PageHeader,
  Row,
  Space,
  Typography,
} from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { MokupReqType } from '../../types/write';

type DetailProps = {
  goBack: () => void;
  onRemove: () => void;
  goEdit: () => void;
  post: MokupReqType | null;
  loading: boolean;
  error: Error | null;
};

const Detail = ({
  post,
  loading,
  error,
  goBack,
  onRemove,
  goEdit,
}: DetailProps) => {
  const [visibileModal, setVisibileModal] = useState(false);
  const onShowModal = () => {
    setVisibileModal(true);
  };
  const onHideModal = () => {
    setVisibileModal(false);
  };

  const categoryTranslate = (category: string) => {
    switch (category) {
      case 'brochure':
        return '브로셔';
      case 'catalogue':
        return '카달로그';
      case 'leaflet':
        return '리플렛';
      case 'etc':
        return '기타';
      default:
        break;
    }
  };

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
              <Typography.Text>
                {categoryTranslate(post.category)}
              </Typography.Text>
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
          <Button onClick={goEdit}>수정</Button>
          <Button danger style={{ marginLeft: '0.5rem' }} onClick={onShowModal}>
            삭제
          </Button>
        </Col>
      </Row>

      <Modal
        title="작업물 삭제"
        visible={visibileModal}
        onOk={onRemove}
        onCancel={onHideModal}>
        <p>정말 삭제하시겠습니까?</p>
      </Modal>
    </>
  );
};

export default Detail;
