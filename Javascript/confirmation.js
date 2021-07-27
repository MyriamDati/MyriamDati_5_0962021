
let orderId = localStorage.getItem('orderId');
let sum = localStorage.getItem('sum');

const getMessageOrder = `
    <div class="messageOrder">
      <p>Bonjour,</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande <span class="gras"> n° ${orderId} </span> d'un montant de <span class="gras"> ${sum}€ </span>, sera traitée dans les meilleures délais.</p>
      <p>Au plaisir de vous revoir !</p>
  </div>`;

  function displayMessageOrder() {
    document.getElementById("resultConfirmId").innerHTML = getMessageOrder
  }

