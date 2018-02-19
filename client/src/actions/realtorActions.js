import fetch from 'isomorphic-fetch';
export function fetchAllRealtors() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REALTORS' });
    return fetch('http://localhost:3001/realtors')
      .then(response => response.json())
      .then(realtors => dispatch({ type: 'FETCH_REALTORS', payload: realtors }));
  }};
