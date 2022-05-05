const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        isInStock(variant) {
            if (variant.quantity < 0) {
                return true;
            } else {
                return false;
            }
        },
    },

    computed: {
        title() {
            return this.brand + " " + this.product
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        image() {
            return this.variants[this.selectedVariant].image
        }
    }
})
