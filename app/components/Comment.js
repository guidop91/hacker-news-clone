import React from 'react';
import { formatDate, pluralize } from '../utils/helpers';

export default function Comment({ comment }) {
  const { date, time } = formatDate(comment.time);
  return (
    <div className='comment'>
      <p>
        by {comment.by} on {date} {time}
      </p>
      <p dangerouslySetInnerHTML={{__html: comment.text}} />
    </div>
  )
}
