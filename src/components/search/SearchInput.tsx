import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput = () => {
  return (
    <Input
      size="large"
      placeholder="검색어를 입력하세요."
      prefix={<SearchOutlined />}
      autoFocus
    />
  );
};

export default SearchInput;
