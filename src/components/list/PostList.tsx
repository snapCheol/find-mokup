import { Col, List, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

type PostListProps = {
  postList: any;
  error: Error | null;
};

const PostList = ({ postList, error }: PostListProps) => {
  if (!postList || error) return null;
  return (
    <>
      <Row justify="center" style={{ marginTop: '2rem' }}>
        <Col xs={24} lg={18}>
          <List
            dataSource={postList}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
              style: { textAlign: 'center' },
            }}
            renderItem={(item: any) => (
              <List.Item
                key={item.id}
                extra={<img width={'272'} alt="logo" src={item.imgUrl} />}>
                <List.Item.Meta
                  title={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                  description={item.manager}
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
