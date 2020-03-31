import React from 'react';
import FeedItem from './FeedItem';
import Comment from './Comment';
import { fetchComments, fetchItem } from '../utils/api';

export default class CommentView extends React.Component {
  state = {
    comments: null,
    post: null
  };

  componentDidMount() {
    fetchItem('22718330')
      .then(res => this.setState({ post: res }))
      .then(() => fetchComments(this.state.post.kids))
      .then((resp) => this.setState({ comments: resp }))

  }
  render () {
    const { comments, post } = this.state;
    if (!post || !comments) return null;
    return (
      <div className='container'>
        <FeedItem post={post} />
        {comments.map(comment => (
          <Comment comment={comment}/>
        ))}
      </div>
    )
  }
}
