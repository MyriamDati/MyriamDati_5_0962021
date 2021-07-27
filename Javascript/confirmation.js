//je récupère les données du local storage de la page panier
let orderId = localStorage.getItem('orderId');
let sum = localStorage.getItem('sum');


//je crée un template html de la page confirmation
const getMessageOrder = `
    <div class="messageOrder">
      <p>Bonjour,</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande <span class="gras"> n° ${orderId} </span> d'un montant de <span class="gras"> ${sum}€ </span>, sera traitée dans les meilleures délais.</p>
      <p>Au plaisir de vous revoir !</p>
  </div>`;

//j'appel le template html afin de l'afficher dans ma page 
  function displayMessageOrder() {
    document.getElementById("resultConfirmId").innerHTML = getMessageOrder
  }

