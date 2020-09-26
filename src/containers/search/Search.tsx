import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../../components/search/SearchInput';
import Settings from '../../components/search/Settings';

const Search = () => {
  const history = useHistory();
  const goWrite = () => {
    history.push('/write');
  };
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} goWrite={goWrite} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Typography.Title>Find Mokup</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} lg={12}>
          <SearchInput />
        </Col>
      </Row>
    </>
  );
};

export default Search;
