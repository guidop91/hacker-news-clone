import React from 'react';
import { fetchMainPosts } from './utils/api';
import FeedItem from './components/FeedItem'
import './index.css';

export default class App extends React.Component {
  state = {
    posts: null
  };

  componentDidMount() {
    fetchMainPosts('top')
      .then(res => this.setState({ posts: res }))
  }
  render() {
    if (!this.state.posts) return null;
    function getDate(timestamp) {
      return new Date(timestamp*1000).toDateString();
    }
    function getTime(timestamp) {
      return new Date(timestamp).toTimeString();
    }
    return (
      this.state.posts.map((post, index) => (
        <FeedItem post={post} key={index} />
      ))
    )
  }
}
