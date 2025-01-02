const addProduct = () => {


    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    productField.value="" ;
    const quantity = quantityField.value;
    quantityField.value = "";
    console.log(product,quantity);
    displayProduct(product,quantity);
}

const displayProduct = (p,q) =>
{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=` ${p} : ${q}`;


    ul.appendChild(li);
}