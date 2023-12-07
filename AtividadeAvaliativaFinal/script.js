const products = [
    { id: 1, name: "Produto 1", price: 20.00 },
    { id: 2, name: "Produto 2", price: 30.00 },
    { id: 3, name: "Produto 3", price: 15.00 }
  ];
  
  let cart = [];
  
  function toggleCart() {
    const cartElement = document.getElementById("cart");
    cartElement.style.display = cartElement.style.display === "block" ? "none" : "block";
  }
  
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItemsElement = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    
    cartItemsElement.innerHTML = "";
    let totalPrice = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
      cartItemsElement.appendChild(li);
      totalPrice += item.price;
    });
  
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }
  
  function checkout() {
    alert("Compra finalizada! Total: R$ " + document.getElementById("totalPrice").textContent);
    cart = [];
    updateCart();
    toggleCart();
  }
  
  // Exemplo de preenchimento de produtos na página (pode ser feito dinamicamente)
  document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById("cartButton");
    const productsList = document.createElement("ul");
  
    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
      
      const addButton = document.createElement("button");
      addButton.textContent = "Adicionar ao Carrinho";
      addButton.onclick = () => addToCart(product.id);
  
      li.appendChild(addButton);
      productsList.appendChild(li);
    });
  
    document.body.insertBefore(productsList, cartButton);
  });