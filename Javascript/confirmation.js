let params = new URL(window.location).searchParams;
let id = params.get('result');

const getMessageOrder = `
    <div class="messageOrder col-md-3">
      <p>Bonjour ${lastName},</p>
      <p>Nous vous remercions pour votre achat !</p>
      <p>Votre commande n° ${confirm.orderId} d'un montant de ${sum}€ sera traitée dans les meilleures délais</p>
  </div>`;