import React, { Component } from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import TextInput from './TextInput';


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


class Hello extends React.Component<HelloProps, {}> {
  public state: any = {};
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      value: '',
      ComponentArr: [],
    };
  }

  // async componentDidMount() {
  //   const component = await import('./TextInput');
  //   console.log(component.default);
  //   const { ComponentArr } = this.state;
  //   ComponentArr.push({
  //     key: (new Date()).valueOf(),
  //     component: component.default
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       ComponentArr
  //     });
  //   }, 2000);
  // }

  public handleClick = () => {
    this.setState({
      value: `蔡秋月：${MyCai.current.value}`
    });
    // console.log(MyCai.current.value);
  };

  public render() {
    console.log(this.props);
    const { ComponentArr } = this.state;
    return (
      <div>
        <Dialog>打开蔡秋月弹框</Dialog>
        <h1 onClick={this.handleClick}>Hello {this.props.compiler}, 你是一只{this.props.framework}!</h1>
        {
          // ComponentArr.map((item: any) => {
          //     const ComponentApp = item.component;
          //     return <ComponentApp key={item.key} MyCai={MyCai} value={this.state.value} />
          // })
        }
        <TextInput MyCai={MyCai} value={this.state.value} />
      </div>
    )
  }
}

// const withApp = withVisiable(Hello);
// export default connect((state: any) => ({ ...state.app }))(withApp);
export default Hello;
