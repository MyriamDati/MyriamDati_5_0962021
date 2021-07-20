let confirmPage = () => {
  const page = document.querySelector("result");

const getMessageOrder = `
    <div class="messageOrder col-md-3">
      <p>Bonjour ${product.name},</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande n° ${orderId} d'un montant de ${sum}€ sera traitée dans les meilleures délais</p>
  </div>`;
}


//valeurs du formulaire et produits sélectionnés dans un tableau
const sendTo = [
  productAdded,
  formValues
];

sendData(sendTo);


