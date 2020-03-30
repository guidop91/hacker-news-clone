import React from 'react';
import FeedItem from './FeedItem';
import { fetchComments, fetchItem } from '../utils/api';

export default class CommentView extends React.Component {
  state = {
    comments: null,
    post: null
  };

  componentDidMount() {
    fetchItem('22718330')
      .then(res => this.setState({ post: res }))
  }
}
