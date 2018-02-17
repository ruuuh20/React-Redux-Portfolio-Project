import fetch from 'isomorphic-fetch';
function search(state, returnResults) {
  let query = []
  Object.keys(state).forEach(function(key){
    if (state[key] !== "" && key !== "filteredListings") {
      let filter = `${key}=${state[key]}`
      query.push(filter)
    }
  })
  console.log(query)
  if (query.length === 0){query.push(`all=true`)}
  query = query.join("&")
  console.log(query)
  return fetch(`http://localhost:3001/listings?${query}`)
    .then(response => response.json())
    .then(returnResults);
}

const Client = { search };
export default Client;
