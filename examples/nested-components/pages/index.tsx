import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import P from '../components/paragraph';
import Post from '../components/post';
import styles from './styles.module.scss';
import { posts, isLoading, errorMessage } from '../domain/posts/selectors';
import { getPosts } from '../domain/posts/actions';
import { Post as PostModel } from '../domain/posts/reducer';
import { RootState } from '../store/reducers';


type HomeProps = {
  posts: PostModel[],
}&
ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>

type HomeState = {
  useRemote: boolean,
};

class Home extends React.PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps){
    super(props);
    this.state = {
      useRemote: false,
    };
  }

  private handleSourceChange = () => {
    this.setState({
      useRemote: !this.state.useRemote,
    });
  }

  componentDidMount() {
    this.props.getPosts(this.state.useRemote);
  }

  componentDidUpdate(prevProps: HomeProps, prevState: HomeState) {
    if(prevState.useRemote === this.state.useRemote) { return; }
    this.props.getPosts(this.state.useRemote);
  }

  render(){
    const {
      posts,
      isLoading,
      errorMessage,
    } = this.props;

    return(
      <div className={styles.main}>
        {errorMessage && <div className={styles.error}> {errorMessage} </div>}
        {isLoading && <div className={styles.loading}> Loading content </div>}
        {posts.map((post, i) => (
          <React.Fragment key={`frag-${i}`}>
            <Post title={post.title} key={`post-${i}`}>
              {post.paragraphs.map((paragraph, j) => (
                <P key={`p-${j}`}>{paragraph}</P>
              ))}
            </Post>
            <hr className={styles.hr} key={`hr-${i}`} />
          </React.Fragment>))}
          <label><input type="checkbox" onChange={this.handleSourceChange} /> use remote data source</label>
      </div>
    );
  }
}

const mapStateToProps = (rootState: RootState) => ({
  posts: posts(rootState),
  isLoading: isLoading(rootState),
  errorMessage: errorMessage(rootState),
});
const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators({
  getPosts,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
