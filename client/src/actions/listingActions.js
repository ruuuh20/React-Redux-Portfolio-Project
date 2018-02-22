import fetch from 'isomorphic-fetch';
import Api from '../api/Api'

export function fetchRealtorListings(realtorId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LISTINGS' });
    return fetch(`http://localhost:3001/realtors/${realtorId}/listings`)
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

    export function fetchListing(listingId) {
      return (dispatch) => {
        dispatch({type: 'LOADING_SINGLE_LISTING'});
        var url = `http://localhost:3001/listings/${listingId}`
        return fetch(url)
        .then(response => response.json())
        .then(listing => dispatch( {type: 'FETCH_SINGLE_LISTING', payload: listing}))
      }
    }

    export function createListing(realtorId, listing){
      return (dispatch) => {
        dispatch({ type: 'CREATING_LISTING' });
        return Api.createListing(realtorId, listing)
        .then(response => response.json())
        .then(listing => dispatch({type: "CREATE_LISTING_SUCCESS", payload: listing}))
      }
    }
