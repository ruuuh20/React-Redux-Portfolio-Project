import fetch from 'isomorphic-fetch';
export function fetchAllListings() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LISTINGS' });
    return fetch('http://localhost:3001/listings')
      .then(response => response.json())
      .then(listings => dispatch({ type: 'FETCH_LISTINGS', payload: listings }));
  }};

  export function fetchFeaturedListings() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_FEATURED_LISTINGS' });
      return fetch('http://localhost:3001/listings/featured')
        .then(response => response.json())
        .then(listings => dispatch({ type: 'FETCH_FEATURED_LISTINGS', payload: listings }));
    }};
