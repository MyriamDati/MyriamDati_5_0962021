// je recupère les données de l'API
function getProducts() {
 return fetch('http://localhost:3000/api/cameras')
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .catch(function(error) {
      alert(error);
    })
}


// je recupère les données de l'API pour la page produit

function getOneProduct(id) {
 return fetch(`http://localhost:3000/api/cameras/${id}`)
    .then(function(response) {
       if(response.ok){
        return response.json()
        }
    })
    .catch(function(error) {
      alert(error);
    })
}


// je recupère les données de la commande
function getOrder() {
  return fecth(`http://localhost:3000/api/cameras/order`)
    .then(function(response) {
       if(response.ok){
        return response.json()
        }
    })
    .catch(function(error) {
      alert(error);
    })
}

