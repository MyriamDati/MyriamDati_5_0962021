let insertcard = document.getElementById('card') 

getProducts()
  .then(products => {
    for (product of products) {
    insertcard.innerHTML += getProductTemplate(product) 
    }
  })