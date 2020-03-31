import React from 'react';
import PropTypes from 'prop-types'
import { formatDate, pluralize } from '../utils/helpers';

export default function FeedItem({ post }) {
  const { date, time } = formatDate(post.time);
  return (
    <ul className="container">
      <li>
        <h2 className="header">{post.title}</h2>
        <p>
          by {post.by} {date}, {time} with{' '}
          {post.descendants} comment{pluralize(post.descendants)}
        </p>
      </li>
    </ul>
  );
}

FeedItem.propTypes = {
  post: PropTypes.shape({
    time: PropTypes.number,
    title: PropTypes.string,
    by: PropTypes.string,
    descendants: PropTypes.number
  })
}
