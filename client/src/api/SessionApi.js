function login(credentials) {
  const request = new Request(`http://localhost:3001/sessions`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({auth: credentials})
  });


  return fetch(request).then(response => {
    return response.json()
  }).catch(error => {
    return error;
  });
}



const SessionApi = { login };
export default SessionApi;
