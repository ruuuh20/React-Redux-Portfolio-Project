import fetch from 'isomorphic-fetch';
function search(state, returnResults) {
  let query = []
  Object.keys(state).forEach(function(key){
    if (state[key] !== "" && key !== "filteredListings") {
      let filter = `${key}=${state[key]}`
      query.push(filter)
    }
  })
  if (query.length === 0){query.push(`all=true`)}
  query = query.join("&")
  return fetch(`http://localhost:3001/listings?${query}`)
    .then(response => response.json())
    .then(returnResults);
}

function loadListing(address, realtorId, returnResult) {
  let query = `address=${address["address"]}`
  return fetch(`http://localhost:3001/realtors/${realtorId}/search_listings?${query}`)
    .then(response => response.json())
    .then(returnResult);
}

function createComment(listingId, comment){
  return fetch('http://localhost:3001/comments', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    listing_id: listingId,
    author: comment.name,
    author_email: comment.email,
    content: comment.content
    })
  })
  }

  function createListing(realtorId, listing){
    return fetch('http://localhost:3001/listings', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      realtor_id: realtorId,
      main_img: listing.mainImgSource,
      neighborhood: listing.neighborhood,
      address: `${listing.streetName} ${listing.unitNumber}`,
      listing_price: listing.listingPrice,
      beds: listing.beds,
      baths: listing.baths,
      description: listing.description,
      images: listing.imgSources

      })
    })
    }

    function deleteListing(listingId) {
      return fetch(`http://localhost:3001/listings/${listingId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    }

const Api = { search, createComment, createListing, loadListing, deleteListing };
export default Api;
