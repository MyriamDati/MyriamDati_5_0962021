let params = new URL(document.location).searchParams;
let id = params.get('id');
//console.log(id);

getOneProduct(id)
  .then(product => {
    document.querySelector('#id').innerHTML = getOneProductTemplate(product);
  })

  