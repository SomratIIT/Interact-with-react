const addProduct =() =>
{
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const Product =  productName.value ;
    productName.value = "";
    const Quantity = productQuantity.value ;
    productQuantity.value = "";
    console.log(Product,Quantity);
    implementUI(Product,Quantity)
}

const implementUI = (a,b) =>{
    const ul = document.getElementById('showUI');
    const li = document.createElement('li');
    li.innerText = `${a} : ${b}`;

    ul.appendChild(li);
}