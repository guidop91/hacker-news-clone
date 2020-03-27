import React from 'react';

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

function formatDate(timestamp) {
  const parsedDate = new Date(timestamp * 1000);
  return {
    date: parsedDate.toDateString(),
    time: parsedDate.toTimeString()
  }
}

function pluralize(qty) {
  return qty === 1 ? '' : 's';
}
