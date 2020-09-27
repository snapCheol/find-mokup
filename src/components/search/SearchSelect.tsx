import React from 'react';
import { Button } from 'antd';

type SearchSelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectSearch: () => void;
};

const SearchSelect = ({ onChange, onSelectSearch }: SearchSelectProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <select
        name="year"
        style={{ width: '45%' }}
        defaultValue="연도를 선택해주세요."
        onChange={onChange}>
        <option value="">전체</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
      <select
        name="category"
        style={{ width: '45%' }}
        defaultValue="카테고리를 선택해주세요."
        onChange={onChange}>
        <option value="">전체</option>
        <option value="brochure">브로셔</option>
        <option value="catalogue">카다로그</option>
        <option value="leaflet">리플렛</option>
        <option value="etc">기타</option>
      </select>

      <Button style={{ marginLeft: 'auto' }} onClick={onSelectSearch}>
        검색
      </Button>
    </div>
  );
};

export default SearchSelect;
