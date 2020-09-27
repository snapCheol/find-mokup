import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';

type LoginProps = {
  loading: boolean;
  onLogin: () => void;
  onChange: ({ key, value }: any) => void;
  authError: Error | null;
};

const Login = ({ onLogin, onChange, loading }: LoginProps) => {
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
              name="email"
              rules={[{ required: true, message: '이메일을 입력해주세요!' }]}>
              <Input
                autoFocus
                prefix={<MailOutlined />}
                placeholder="Email"
                onChange={onChange}
                name="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '패스워드를 입력해주세요!' }]}>
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
                style={{ width: '100%' }}
                loading={loading}>
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
