import { SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';

type SettingProps = {
  logout: () => void;
  goWrite: () => void;
};

const Settings = ({ logout, goWrite }: SettingProps) => {
  return (
    <div>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item onClick={goWrite}>시안 등록</Menu.Item>
            <Menu.Item onClick={logout}>로그아웃</Menu.Item>
          </Menu>
        }>
        <Button shape="circle" icon={<SettingOutlined />} />
      </Dropdown>
    </div>
  );
};

export default Settings;
