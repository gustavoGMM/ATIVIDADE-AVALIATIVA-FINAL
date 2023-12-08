document.addEventListener('DOMContentLoaded', function () {
    const cartSummary = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');
    const paymentForm = document.getElementById('payment-form');

    // Simulação de dados do carrinho (pode ser passado do carrinho real)
    const cart = [];

    // Selecione todos os botões "Adicionar ao Carrinho"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productContainer = this.closest('.product');
            const productName = productContainer.querySelector('h3').textContent;
            const productPrice = parseFloat(productContainer.dataset.price);
            const quantityInput = productContainer.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value);

            // Verifique se a quantidade é válida
            if (quantity > 0) {
                const existingProduct = cart.find(item => item.name === productName);

                if (existingProduct) {
                    existingProduct.quantity += quantity;
                } else {
                    cart.push({
                        name: productName,
                        price: productPrice,
                        quantity: quantity
                    });
                }

                updateCart();
            } else {
                alert('Digite uma quantidade válida maior que zero.');
            }
        });
    });

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Aqui você normalmente faria uma requisição ao seu backend para processar o pagamento
        // e retornar uma confirmação. Neste exemplo, apenas exibimos um alerta simulando o pagamento.
        alert('Pagamento efetuado com sucesso!');
    });

    function updateCart() {
        cartSummary.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>R$ ${item.price * item.quantity}</span>
            `;

            cartSummary.appendChild(listItem);
            totalPrice += item.price * item.quantity;
        });

        totalDisplay.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    }
});