//je récupère les données du local storage de la page panier
let orderId = localStorage.getItem('orderId');
let sum = localStorage.getItem('sum');


//j'appel le template html afin de l'afficher dans ma page 
  function displayMessageOrder() {
    document.getElementById("resultConfirmId").innerHTML = getMessageOrder()
  };

//on supprime le panier et les données de l'utilisateur lorsqu'il quitte la page de confirmation 
localStorage.clear();