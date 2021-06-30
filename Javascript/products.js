let pageProduct =
`<div class="card">
        <div class="container-page-product">
          <div class="img-product">
            <img src="${product.imageUrl}" alt="appareil photo">
          </div>
          <div class="description-product">
            <ul>
              <li>Nom:${product.name}
              </li>
              <li>Description:${product.description}
              </li>
              <li>Prix:${product.price}€
              </li>
            </ul>

            <form>
              <label for="option-produit"></label>
              <select name="option-produit" id="option-produit">
                <option value="lenses_1">${product.lenses}€</option>
                <option value="lenses_2">${product.lenses}€</option>
                <option value="lenses_3">${product.lenses}€</option>
              </select>
            </form>
            <button>Commander</button>
          </div>
        </div>
</div>`

