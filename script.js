const adicionar = document.querySelector("#adicionar");
const imagenDoProduto = document.querySelector("#compras")
const btnImagen = document.querySelector("#enviar")
const form = document.querySelector("#formu");

adicionar.addEventListener("click", (event) => {
    event.preventDefault()

    const newProduct = {
        nome: document.getElementById("nproduct").value,
        preco: document.getElementById("pproduct").value,
        descripcion: document.getElementById("subject").value,
        imgProducto: imagenDoProduto.src,
        quantidade: 1
    };

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    products.push(newProduct);
    
    localStorage.setItem("products", JSON.stringify(products));
    
    form.reset()
})

btnImagen.addEventListener("click", (event) => {
    event.preventDefault()

    const srcImg = prompt("link da imagen")
    imagenDoProduto.src = srcImg
})

/*window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {

        while (this.files && this.files[0]) {
            var reader = new FileReader()
            reader.addEventListener('load', (event) => {
                let image = document.querySelector('#compras')
                image.src = event.target.result;
            })
            reader.readAsDataURL(this.files[0])
        }
    })
})*/