import React from 'react';
import TopPosts from './components/TopPosts';
import CommentView from './components/CommentView';
import './index.css';

export default class App extends React.Component {
  render() {
    return <CommentView/>
  }
}
