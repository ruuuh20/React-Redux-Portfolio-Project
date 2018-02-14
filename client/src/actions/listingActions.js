import fetch from 'isomorphic-fetch';
export function fetchListings() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LISTINGS' });
    return fetch('http://localhost:3001/listings')
      .then(response => response.json())
      .then(listings => dispatch({ type: 'FETCH_LISTINGS', payload: listings }));
  }};
