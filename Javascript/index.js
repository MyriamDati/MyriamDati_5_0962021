(async function() {
  const products = await getProducts() 

  for (product of products) {
    displayProduct(product)
  }
})()


function getProducts() {
 return fetch('http://localhost:3000/api/cameras')
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .then(function(products) {
      return products
    })
    .catch(function(error) {
      alert(error)
    })
}

function displayProduct(product) {
  document.getElementById('card').innerHTML += `
  <div class="card-body">
  
  </div>`
}
    