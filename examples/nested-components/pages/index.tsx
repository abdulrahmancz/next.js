import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import P from '../components/paragraph';
import Post from '../components/post';
import styles from './styles.module.scss';
import { posts } from '../domain/posts/selectors';
import { getPosts } from '../domain/posts/actions';
import { RootState } from '../store/reducers';

type PostModel = {
  title: string;
  paragraphs: string[];
}

type HomeProps = {
  posts: PostModel[];
}&
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>

class Home extends React.PureComponent<HomeProps> {
  componentDidMount() {
    this.props.getPosts(true);
  }

  render(){
    return(
      <div className={styles.main}>
        {this.props.posts.map((post, i) => (
          <React.Fragment key={`frag-${i}`}>
            <Post title={post.title} key={`${post.title}-${i}`}>
              {post.paragraphs.map((paragraph, j) => (
                <P key={`p-${j}`}>{paragraph}</P>
              ))}
            </Post>
            <hr className={styles.hr} key={`hr-${i}`} />
          </React.Fragment>))}
      </div>
    );
  }
}

const mapStateToProps = (rootState: RootState) => ({
  posts: posts(rootState),
});
const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators({
  getPosts,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
