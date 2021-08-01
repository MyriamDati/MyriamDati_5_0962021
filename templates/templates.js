//Création du template de la page d'acceuil 
function getProductTemplate(product) {
  return `<a href="product.html?id=${product._id}" class="card-body col-md-3">
    <img class="card-image" src="${product.imageUrl}">
    <h3 class="card-name">${product.name}</h3>
    <div class="card-information">
      <h5 class="card-price" id="price">${product.price/100} €</h5>
    </div>
    <button id="btn-product" type="submit" name="btn-product" href="product.html" class="btn-product">Voir le produit</button>
  </a>`
}

//Création du template de la page produit sélectionné
function getOneProductTemplate(product) {
  return `<div id="id" class="card">
    <div class="container-page-product">
      <div class="img_product">
        <img src="${product.imageUrl}" alt="appareil photo">
      </div>
      <div id="description_card" class="description_card">
        <ul>
          <li class="name_product">${product.name}</li>
          <li class="description_product">${product.description}</li>
          <li class="price_product pt-2">${product.price/100} €</li>
        </ul>
        <form>
          <label for="option-produit" class= "ml-2 text-white">Choississez votre lentille :</label>
          <select name="option-produit" id="option-produit">
            <option value="lenses_1">${product.lenses}€</option>
            <option value="lenses_2">${product.lenses}€</option>
            <option value="lenses_3">${product.lenses}€</option>
          </select>
        </form>
        <form methode="POST" action="">
          <label for="quantity" class= "quantity ml-2 text-white">Quantité : </label>
            <select name="label" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </form>

        <button id="basket" type="submit" name="basket" class="btn-panier m-2">Ajouter au panier</button>
      </div>
    </div>
</div>`
}

//Template pour la page html de la partie formulaire
function getForm() { `
  <form id="formulaire" method="POST" class="w-50 border border-secondary p-3 mt-5">
      <h3 class="informations text-dark">Informations personnelles</h3>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input id="nom" type="text" class="form-control" placeholder="Entrer votre nom" required>
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input id="prenom" type="text" class="form-control" placeholder="Entrer votre prénom" required>
      </div>
      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input id="adresse" type="text" class="form-control" placeholder="Entrer votre adresse" required>
      </div>
        <div class="form-group">
          <label for="ville">Ville</label>
          <input id="ville" type="text" class="form-control" placeholder="Entrer votre ville" required>
        </div>
        </div>
        <div class="form-group">
          <label for="mail">Email</label> 
          <input id="mail" type="text" class="form-control" placeholder="Entrer votre adresse mail" required>
      </div>
      <a type="submit" id="boutonConfirmation" class="btn btn-dark text-white">Confirmer mon achat</a>
    </form>
  `}


//Création du template de la page de confirmation
function getMessageOrder() {
  return `<div class="messageOrder">
      <p>Bonjour,</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande <span class="gras"> n° ${orderId} </span> d'un montant de <span class="gras"> ${sum}€ </span>, sera traitée dans les meilleurs délais.</p>
      <p>Au plaisir de vous revoir !</p>
  </div>`
}