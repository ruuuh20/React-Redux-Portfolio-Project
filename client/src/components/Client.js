import fetch from 'isomorphic-fetch';
function search(query, returnResults) {
  console.log(query)
  return fetch(`http://localhost:3001/listings?q=${query}`)
    .then(response => response.json())
    .then(returnResults);
}

const Client = { search };
export default Client;
