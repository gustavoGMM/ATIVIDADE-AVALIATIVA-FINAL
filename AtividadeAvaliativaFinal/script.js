document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartList = document.getElementById('cart');
  const totalDisplay = document.getElementById('total');
  let cart = [];

  addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
      const product = event.target.closest('.product');
      const name = product.dataset.name;
      const price = parseFloat(product.dataset.price);

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ name, price, quantity: 1 });
      }

      updateCart();
  }

  function updateCart() {
      cartList.innerHTML = '';
      let totalPrice = 0;

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.className = 'cart-item';
          listItem.innerHTML = `
              <span>${item.name} x ${item.quantity}</span>
              <span>R$ ${item.price * item.quantity}</span>
          `;

          cartList.appendChild(listItem);
          totalPrice += item.price * item.quantity;
      });

      totalDisplay.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
  }
});