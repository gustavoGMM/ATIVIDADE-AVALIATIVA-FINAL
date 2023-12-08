document.addEventListener('DOMContentLoaded', function () {
    const cartSummary = document.getElementById('cart-summary');
    const totalDisplay = document.getElementById('total');
    const paymentForm = document.getElementById('payment-form');

    // Simulação de dados do carrinho (pode ser passado do carrinho real)
    const cart = [
        { name: 'Gtx 1080', price: 7000, quantity: 1 },
        { name: 'RTX 3060', price: 1889, quantity: 2 },
        { name: 'RTX 4060', price: 2274, quantity: 1 }
    ];

    updateCart();

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