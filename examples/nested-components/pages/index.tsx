import React from 'react';

import P from '../components/paragraph';
import Post from '../components/post';
import styles from './styles.module.scss';

type PostModel = {
  title: string;
  paragraphs: string[];
}

type HomeProps = {
  posts: PostModel[];
}

export default class Home extends React.PureComponent<HomeProps> {
  static async getInitialProps() {
    const posts = [
      {
        title: 'My second blog post',
        paragraphs: [
          'Hello there',
          'This is an example of a componentized blog post',
        ],
      },
      {
        title: 'My first blog post',
        paragraphs: [
          '<div style="background: pink">Hello there</div>',
          'This is another example.',
          'Wa-hoo!',
        ],
      },
      {
        title: 'The final blog post',
        paragraphs: [
          'C’est fin',
        ],
      },
    ];

    return { posts }
  }

  render(){
    return(
      <div className={styles.main}>
        {this.props.posts.map(post => (
          <>
            <Post title={post.title}>
              {post.paragraphs.map(paragraph => (
                <P>{paragraph}</P>
              ))}
            </Post>
            <hr className={styles.hr} />
          </>))}
      </div>
    );
  }
}
