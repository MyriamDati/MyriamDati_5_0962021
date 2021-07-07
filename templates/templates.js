//Création du template de la page d'acceuil 
function getProductTemplate(product) {
  return `<a href="product.html?id=${product._id}" class="card-body col-md-3">
    <img class="card-image" src="${product.imageUrl}">
    <h3 class="card-name">${product.name}</h3>
    <div class="card-information">
      <h5 class="card-price" id="price">${product.price/100} €</h5>
    </div>
  </a>`
}

//Création du template de la page produit sélectionné
function getOneProductTemplate(product) {
  return `<div id="id" class="card">
    <div class="container-page-product">
      <div class="img_product">
        <img src="${product.imageUrl}" alt="appareil photo">
      </div>
      <div id="description-card" class="description_card">
        <ul>
          <li class="name_product">${product.name}</li>
          <li class="description_product">${product.description}</li>
          <li class="price_product">${product.price/100} €</li>
        </ul>
        <form>
          <label for="option-produit">Lenses:</label>
          <select name="option-produit" id="option-produit">
            <option value="lenses_1">${product.lenses}€</option>
            <option value="lenses_2">${product.lenses}€</option>
            <option value="lenses_3">${product.lenses}€</option>
          </select>
        </form>
        <label for="q">Quantité: </label>
          <select id="qt" name="q">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <button onclick="window.location.href = 'basket.html';">Ajouter au panier</button>
      </div>
    </div>
</div>`
}

