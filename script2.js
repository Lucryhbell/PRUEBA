const objProductos = JSON.parse(localStorage.getItem("products"))
const contenedor = document.querySelector("#contenedor")

for (product of objProductos) {

    let listaDeProductos = document.createElement("div")
    listaDeProductos.innerHTML = 
    `<div class="image">
        <img class="product__img"
            src="${product.imgProducto}"
            alt="Imagen do produto">
        <h2 class="product__title">${product.nome}</h2>
        <p class="product__description">${product.descripcion}</p>
        <span id="price" class="price">R$ ${product.preco}</span>
     </div>
     <div>
        <input id="product__input" class="product__input" type="number" min="0" name="pieces" placeholder="1 pcs" value="${product.quantity}">
     </div>` 
    contenedor.appendChild(listaDeProductos)
}