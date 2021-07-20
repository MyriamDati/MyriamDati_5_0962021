let params = new URL(document.location).searchParams;
let id = params.get('result');

const getMessageOrder = `
    <div class="messageOrder col-md-3">
      <p>Bonjour ...,</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande n° ... d'un montant de ...€ sera traitée dans les meilleures délais</p>
  </div>`;




