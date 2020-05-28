import React, { Component } from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { history } from 'umi';
import { connect } from 'react-redux';


interface HelloProps {
  compiler?: string;
  framework?: string;
  [name: string]: any;
}

class Login extends Component<HelloProps, {}> {
  public state: any = {};
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount(): void {
    this.props.dispatch({
      type: 'user/login',
      payload: {
        name: 'daCai'
      },
    });
  }

  public handleClick = () => {
    history.push('/login/home');
  };

  public onFinish = (values: any) => {
    console.log('Success:', values);
  };

  public onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    console.log(this.props);
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <div>
        <h1 onClick={this.handleClick}>黑猫警长!</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true, username: '', password: '' }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect((state: any) => ({ ...state.user }))(Login);
