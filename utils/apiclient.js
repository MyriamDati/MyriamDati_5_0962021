// appel de l'API
function getProducts() {
 return fetch('http://localhost:3000/api/cameras')
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .catch(function(error) {
      alert(error)
    })
}

