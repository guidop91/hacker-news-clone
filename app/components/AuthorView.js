import React from 'react';
import { fetchUser } from '../utils/api';
import FeedItem from './FeedItem';

export default class AuthorView extends React.Component {
  state = {
    authorInfo: null
  };

  componentDidMount () {
    fetchUser('cletus')
      .then(res => this.setState({ authorInfo: res }));
  }

  render () {
    const { authorInfo } = this.state;
    if (!authorInfo) return null;
    return (
      <div className='container'>

      </div>
    );
  }
}