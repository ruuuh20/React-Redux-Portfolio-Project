import Client from '../components/Client'

export function createComment(listingId, comment){
  return (dispatch) => {
    dispatch({ type: 'CREATING_COMMENT' });
    return Client.createComment(listingId, comment)
    .then(response => response.json())
    .then(comment => dispatch({type: "CREATE_COMMENT_SUCCESS", payload: comment}))
  }
}
