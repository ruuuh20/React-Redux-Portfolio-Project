import React from 'react';

const CommentView = (props) => {
  return (
    <div>
      <p>{props.comment.author}</p>
      <p>{props.comment.content}</p>
      <p>{props.comment.created_at}</p>
    </div>
  )
}


export default CommentView
