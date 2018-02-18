import React from 'react';

const CommentView = ({comment}) => {
  return (
    <div className="comment">
      <small>{comment.author}</small>
      <small>{comment.created_at}</small>
      <p>{comment.content}</p>

    </div>
  )
}


export default CommentView
