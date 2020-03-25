import React from 'react';
import { fetchMainPosts } from './utils/api';

export default class App extends React.Component {
  componentDidMount() {
    fetchMainPosts('top')
      .then(res => console.log(res))
  }
  render() {
    return null;
  }
}
