import React from 'react';

const CommentView = ({comment}) => {
  return (
    <div>
      <p>{comment.author}</p>
      <p>{comment.content}</p>
      <p>{comment.created_at}</p>
    </div>
  )
}


export default CommentView
