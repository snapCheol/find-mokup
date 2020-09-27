import { SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

type SettingProps = {
  goLogin: () => void;
  onLogout: () => void;
  goWrite: () => void;

  user: any;
};

const Settings = ({ user, goLogin, onLogout, goWrite }: SettingProps) => {
  return (
    <div>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item>
              <Link to="/write">시안 등록</Link>
            </Menu.Item>
            {user ? (
              <Menu.Item onClick={onLogout}>로그아웃</Menu.Item>
            ) : (
              <Menu.Item>
                <Link to="/login">로그인</Link>
              </Menu.Item>
            )}
          </Menu>
        }>
        <Button shape="circle" icon={<SettingOutlined />} />
      </Dropdown>
    </div>
  );
};

export default Settings;
