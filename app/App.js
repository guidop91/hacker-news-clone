import React from 'react';
import TopPosts from './components/TopPosts';
import CommentView from './components/CommentView';
import './index.css';
import AuthorView from './components/AuthorView';

export default class App extends React.Component {
  render() {
    return <AuthorView/>
  }
}
