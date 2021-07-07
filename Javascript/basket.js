//let button = document.querySelector('button');
  //button.addEventListener('click', actionClick);

  //let order =["product.name","product.price/100","#qty"];
  //localStorage.setItem('cart', JSON.stringify(cart));

window.onload = () => {
  let product_name = ${"product.name"}
  let quantity = "#qty"
  let price = ${"product.price/100"}

  localStorage.setItem("name", product_name)
  localStorage.setItem("qty", quantity)
  localStorage.setItem("price", price)
}