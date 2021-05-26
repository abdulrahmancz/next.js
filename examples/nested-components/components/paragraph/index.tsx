import React from 'react';

import styles from './styles.module.scss';

export default class Paragraph extends React.PureComponent {
  render() {
    return(
      <p className={styles.p}>
        {this.props.children?.toString()}
      </p>
    );
  }
}
