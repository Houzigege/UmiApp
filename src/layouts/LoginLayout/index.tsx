import React from 'react';
import styles from './index.less';

const LoginLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Login!</h1>
      {props.children}
    </div>
  );
};

export default LoginLayout;
