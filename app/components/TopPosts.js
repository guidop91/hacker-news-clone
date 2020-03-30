import React from 'react';
import { fetchMainPosts } from '../utils/api';
import FeedItem from './FeedItem'

export default class TopPosts extends React.Component {
  state = {
    posts: null
  };

  componentDidMount() {
    fetchMainPosts('top')
      .then(res => this.setState({ posts: res }))
  }
  render() {
    if (!this.state.posts) return null;
    return (
      this.state.posts.map((post, index) => (
        <FeedItem post={post} key={index} />
      ))
    )
  }
}
