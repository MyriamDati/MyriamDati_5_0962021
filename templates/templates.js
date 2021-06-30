function getProductTemplate(product) {
  return `<a href="products.html?$id={product._id}" class="card-body col-md-3">
    <img class="card-image img-rounded" src="${product.imageUrl}">
    <h3 class="card-name">${product.name}</h3>
    <div class="card-information">
      <h5 class="card-price" id="price">${product.price}€</h5>
    </div>
  </a>`
}



