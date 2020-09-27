import React from 'react';
import { Link } from 'react-router-dom';
import { Col, List, Row, Skeleton } from 'antd';

type PostListProps = {
  loading: Boolean;
  postList: any;
  error: Error | null;
};

const PostList = ({ postList, error, loading }: PostListProps) => {
  if (loading) {
    return (
      <Row justify="center" style={{ marginTop: '2rem' }}>
        <Col xs={24} lg={18}>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  if (!postList || error) return null;
  return (
    <>
      <Row justify="center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Col xs={24} lg={18}>
          <List
            dataSource={postList}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
              style: { textAlign: 'center' },
            }}
            renderItem={(item: any) => (
              <List.Item
                key={item.id}
                extra={<img width={'50'} alt="logo" src={item.imgUrl} />}>
                <List.Item.Meta
                  title={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                  description={item.year}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default PostList;
