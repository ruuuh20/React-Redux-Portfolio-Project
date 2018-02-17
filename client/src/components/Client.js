import fetch from 'isomorphic-fetch';
function search(state, returnResults) {
  let query = `neighborhood=${state.neighborhood}`
  return fetch(`http://localhost:3001/listings?${query}`)
    .then(response => response.json())
    .then(returnResults);
}

const Client = { search };
export default Client;
