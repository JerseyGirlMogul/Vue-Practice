let app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        details: ['100% cotton', 'Gender-neutral'],
        image: 'vmSocks-green-onWhite.jpeg',
        inStock: true,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            }
        ]
    }
})