import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';

type LoginProps = {
  onLogin: () => void;
  onChange: ({ key, value }: any) => void;
  authError: Error | null;
};

const Login = ({ onLogin, onChange }: LoginProps) => {
  return (
    <>
      <Row justify="center" align="middle" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title>Find Mokup</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            onFinish={onLogin}
            initialValues={{ remember: true }}
            style={{ width: 300, marginTop: 50 }}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}>
              <Input
                autoFocus
                prefix={<UserOutlined />}
                placeholder="Username"
                onChange={onChange}
                name="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}>
              <Input
                prefix={<LockOutlined />}
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
