//On récupère les données de l'API
let params = new URL(document.location).searchParams;
let id = params.get('id');

//On envoie les données pour créer la page produit de chaque article
getOneProduct(id)
  .then(product => {
    document.getElementById('id').innerHTML = getOneProductTemplate(product);

//récupération des infos de la cartes
  const basket = document.querySelector("#quantity");

// Sélection du bouton ajouter dans mon panier 
  let btn_ajouter = document.querySelector("#basket");

// On ajout l'écouteur d'événement au clique sur le bouton ajouter au panier
  btn_ajouter.addEventListener("click", (event) => {

  const quantity = basket.value;

// On créée la variables avec les infos à envoyer au panier
    let addQuantity = {
      name: product.name,
      id: product._id,
      quantity: quantity,
      price: (product.price * quantity)/ 100
    };
    console.log(addQuantity);

//on déclare la variable dans la quelle on va stocker les données
  let productAdded = JSON.parse(localStorage.getItem("product"));

// //je crée la fonction de la fenêtre pop-up d'ajout au panier
  function popupAdd () {
    alert(`Votre article ${product.name} a bien été ajouté au panier`);
  };

//si le produit est déjà dans le local storage
  if(productAdded){
    productAdded.push(addQuantity);
    localStorage.setItem("product", JSON.stringify(productAdded));
    popupAdd ()

  }
//si il n'y a pas de produit 
  else{
    productAdded = [];
    productAdded.push(addQuantity);
    localStorage.setItem("product", JSON.stringify(productAdded));
    console.log(productAdded);
  }
  });
});

