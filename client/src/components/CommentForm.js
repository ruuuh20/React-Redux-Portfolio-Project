import React from 'react';

const CommentForm = (props) => {
  return (
    <div className="comment-box">
    <small>Seen this place? Help out your fellow hunters and leave a comment below!</small>
    <br />
    <form onSubmit={props.handleFormSubmit.bind(this)}>
      <div className="form-group">
        <label forhtml="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={props.comment.name}
          onChange={props.handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label forhtml="email">email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={props.comment.email}
          onChange={props.handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label forhtml="email">comment</label>
        <textarea
          id="content"
          type="text"
          name="content"
          rows="7"
          value={props.comment.content}
          onChange={props.handleInputChange}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">Add Comment</button>
    </form>
    </div>
  )
}


export default CommentForm
