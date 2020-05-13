import React, { Component } from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';


const MyCai: any = React.createRef();

interface HelloProps {
  compiler?: string;
  framework?: string;
  [name: string]: any;
}

class Dialog extends React.Component {
  public node = document.createElement('div');
  constructor(props: object) {
    super(props);
    document.body.appendChild(this.node);
  }

  render() {
    console.log('打开蔡秋月弹框');
    return createPortal(
      <div>
        {this.props.children}
      </div>,
      this.node
    );
  }
}


const withVisiable = (WrappedComponent?: any) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} compiler="蔡秋月" framework="大猫"  visiable={true} />
    }
  }
};


class TextInput extends React.Component<HelloProps, {}> {
  public state: any = {};
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      value: '',
      controlledValue: ''
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log(props, state);
    if (props.value !== state.controlledValue) {
      return {
        controlledValue: props.value,
      };
    }
    return null;
  }

  public handleChange = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };

  public render() {
    return (
      [
        <p key="p">{this.state.controlledValue}</p>,
        <input key="input" type="text" placeholder="Hello forwardRef" onChange={this.handleChange} value={this.state.value} ref={this.props.MyCai} />
      ]
    )
  }
}


class Hello extends React.Component<HelloProps, {}> {
  public state: any = {};
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  public handleClick = () => {
    this.setState({
      value: `蔡秋月：${MyCai.current.value}`
    });
    console.log(MyCai.current.value);
  };

  public render() {
    console.log(this.props);
    return (
      <div>
        <Dialog>打开蔡秋月弹框</Dialog>
        <h1 onClick={this.handleClick}>Hello {this.props.compiler}, 你是一只{this.props.framework}!</h1>
        <TextInput MyCai={MyCai} value={this.state.value} />
      </div>
    )
  }
}

const withApp = withVisiable(Hello);
export default connect((state: any) => ({ ...state.app }))(withApp);
