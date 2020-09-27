import { Spin } from 'antd';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
