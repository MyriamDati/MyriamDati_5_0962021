//-------------------Panier-------------------

//on déclare la variable dans la quelle on va stocker les données
let productAdded = JSON.parse(localStorage.getItem("product"));

//on crée le tableau des valeurs vide ou des valeurs ajoutés par l'utilisateur
const tableBasket = document.querySelector(".card_recap");

if(productAdded === null){
  const emptyBasket = `
    <div class="border border-secondary text-center p-2">Votre panier est vide</div>
  `;
tableBasket.innerHTML = emptyBasket;
}
else{
  let fullBasket = `
    <thead class="thead-dark">
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Quantité</th>
        <th scope="col">Prix</th>
      </tr>
    </thead> `
  for(i = 0; i <productAdded.length; i++){
    fullBasket += `
      <tbody>
        <tr>
          <tr class="table-dark border border-dark">
            <th scope="col">${productAdded[i].name}</th>
            <th scope="col">${productAdded[i].quantity}</th>
            <th scope="col">${productAdded[i].price} €</th>
          </tr>
        </tr>
      </tbody>`
    tableBasket.innerHTML = fullBasket;
  }
  };

  //----Ajout du montant total du panier----
  let totalBasket = [];

  for(let j = 0; j <productAdded.length; j++){
    let priceProduct = productAdded[j].price;

    totalBasket.push(priceProduct)
  }

  //addition du prix pour obtenir le montant total
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = totalBasket.reduce(reducer,0);

  const showTotal = `
  <tr class="text-dark border border-dark text-right">
    <th scope="row">Le montant total est de : ${sum} €</th>
  </tr>
  `;

  tableBasket.insertAdjacentHTML("beforeend", showTotal);

  sum = localStorage.setItem("sum", sum);



//-----------------------------Formulaire----------------------------- 
const showForm = () => {
const formUser = document.getElementById("container-produits-panier");

const getForm = `
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
      <a type="submit" class="btn btn-dark text-white">Confirmer mon achat</a>
    </form>
  `;

formUser.insertAdjacentHTML("afterend", getForm);
};

showForm();

//On créé le formulaire de renvoie
const btnForm = document.querySelector(".btn");

//on récupère les données du formulaire pour le local storage
btnForm.addEventListener("click", (event) =>{
  const formValues = {
    firstName: document.querySelector("#nom").value,
    lastName: document.querySelector("#prenom").value,
    address: document.querySelector("#adresse").value,
    city: document.querySelector("#ville").value,
    email: document.querySelector("#mail").value
  };

  localStorage.setItem("formValues", JSON.stringify(formValues));


// On ajoute à une variable la clé 
const formDataLS = localStorage.getItem("formValues");
//conversion en JS
const formDataLSObj = JSON.parse(formDataLS);


//----------------Vérification des données du formulaire et leurs valeurs entrées----------------
const checkString = (value) => {
  return /^[A-Za-z\s]{0,20}$/.test(value);
}
const checkNumb = (value) => {
  return /^[0-9]{5}$/.test(value);
}
const checkAdress = (value) => {
  return /^[[a-zA-ZÀ-ÿ0-9\s]{3,100}$/.test(value);
}
const checkMail = (value) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}

function nameCheck() {
  const nameUser = formValues.nom;
  if(checkString(nameUser)) {
    return true;
  }else{
    alert("Merci de remplir le champs avec des lettres jusqu'à 20 caractères");
    return false;
  }
};

function prenomCheck() {
  const prenomUser = formValues.prenom;
  if(checkString(prenomUser)) {
    return true;
  }else{
    alert("Merci de remplir le champs avec des lettres jusqu'à 20 caractères");
    return false;
  }
};

function adressCheck() {
  const adressUser = formValues.adresse;
  if(checkAdress(adressUser)) {
    return true;
  }else{
    alert("Merci de remplir le champs avec des lettres entre 3 et 100 caractères");
    return false;
  }
};

function cityCheck() {
  const cityUser = formValues.ville;
  if(checkString(cityUser)) {
    return true;
  }else{
    alert("Merci de remplir le champs avec des lettres jusqu'à 20 caractères");
    return false;
  }
};


function mailCheck() {
  const mailUser = formValues.email;
  if(checkMail(mailUser)) {
    return true;
  }else{
    alert("Le champs Email n'a pas été rempli correctement");
    return false;
  }
};

if(nameCheck() && prenomCheck() && adressCheck() && cityCheck() && mailCheck()) {
    localStorage.setItem("formValues", JSON.stringify(formValues));

//valeurs du formulaire et produits sélectionnés dans un tableau
const dataPost = {
  products: ["5be1ed3f1c9d44000030b061","5be1ef211c9d44000030b062", "5be9bc241c9d440000a730e7", "5be9bc241c9d440000a730e7", "5be9bc241c9d440000a730e7"],
  contact: formValues
};
console.log(dataPost);

//renvoie à la page de confirmation
sendData(dataPost)
  .then(confirm  => {
    window.location.replace("confirmation.html?orderId=" + confirm.orderId);

  orderId = localStorage.setItem("orderId", confirm.orderId);
  })
  .catch(function(error) {
      alert(error);
  })
};
});
