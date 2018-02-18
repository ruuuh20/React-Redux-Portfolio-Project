import Api from '../api/Api'

export function createComment(listingId, comment){
  return (dispatch) => {
    dispatch({ type: 'CREATING_COMMENT' });
    return Api.createComment(listingId, comment)
    .then(response => response.json())
    .then(comment => dispatch({type: "CREATE_COMMENT_SUCCESS", payload: comment}))
  }
}

export function fetchComments(listingId) {
  return (dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'});
    var url = `http://localhost:3001/listings/${listingId}/comments`
    return fetch(url)
    .then(response => response.json())
    .then(comments => dispatch( {type: 'FETCH_COMMENTS', payload: comments}))
  }
}
