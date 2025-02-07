document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Cozy Blanket',
            price: 89.99,
            image: 'https://example.com/blanket.jpg'
        },
        {
            id: 2,
            name: 'Amigurumi Bear',
            price: 35.50,
            image: 'https://example.com/bear.jpg'
        },
        {
            id: 3,
            name: 'Winter Scarf',
            price: 45.00,
            image: 'https://example.com/scarf.jpg'
        }
    ];

    const cart = [];
    const productGrid = document.getElementById('product-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    function renderProducts() {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `).join('');

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    function addToCart(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);
        
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = cart.map(product => `
            <div class="cart-item">
                ${product.name} - $${product.price.toFixed(2)}
            </div>
        `).join('');

        const total = cart.reduce((sum, product) => sum + product.price, 0);
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartCountElement.textContent = cart.length;
    }

    function checkout() {
        alert(`Checkout completed! Total: $${cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}`);
        cart.length = 0;
        updateCart();
    }

    checkoutBtn.addEventListener('click', checkout);
    renderProducts();
});
