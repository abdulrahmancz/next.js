import React from 'react';

import styles from './styles.module.scss';

type PostProps = {
  title: string;
}

export default class Post extends React.PureComponent<PostProps> {
  render(){
    return(
      <div className={styles.main}>
        <h1 className={styles.heading}>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  };
}
