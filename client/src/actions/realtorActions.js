import fetch from 'isomorphic-fetch';
export function fetchAllRealtors() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REALTORS' });
    return fetch('http://localhost:3001/realtors')
      .then(response => response.json())
      .then(realtors => dispatch({ type: 'FETCH_REALTORS', payload: realtors }));
  }};

  export function fetchRealtor(realtorId) {
    return (dispatch) => {
      dispatch({type: 'LOADING_REALTOR'});
      var url = `http://localhost:3001/realtors/${realtorId}`
      debugger
      return fetch(url)
      .then(response => response.json())
      .then(realtor => dispatch( {type: 'FETCH_REALTOR', payload: realtor}))
    }
  }
