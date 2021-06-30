function getProductTemplate(product) {
  return `<a href="products.html?id=${product._id}" class="card-body col-md-3">
    <img class="card-image img-rounded" src="${product.imageUrl}">
    <h3 class="card-name">${product.name}</h3>
    <div class="card-information">
      <h5 class="card-price" id="price">${product.price}€</h5>
    </div>
  </a>`
}

function getOneProductTemplate(product) {
  return `<div class="card">
        <div class="container-page-product">
          <div class="img-product">
            <img src="${product.imageUrl}" alt="appareil photo">
          </div>
          <div class="description-product">
            <ul>
              <li>Nom:${product.name}
              </li>
              <li>Description:${product.description}
              </li>
              <li>Prix:${product.price}€
              </li>
            </ul>

            <form>
              <label for="option-produit"></label>
              <select name="option-produit" id="option-produit">
                <option value="lenses_1">${product.lenses}€</option>
                <option value="lenses_2">${product.lenses}€</option>
                <option value="lenses_3">${product.lenses}€</option>
              </select>
            </form>
            <button>Commander</button>
          </div>
        </div>
</div>`
}

