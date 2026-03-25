import { ref } from "vue"
import { useDatabase } from "./useDatabase"

const PRODUCTS_KEY = "products"
const CART_KEY = "cart"

const products = ref<any[]>([])
const cart = ref<any[]>([])

export function useCatalog() {

    const { get, set } = useDatabase()

    function loadProducts() {
        const data = get(PRODUCTS_KEY)
        products.value = data || []
    }

    function saveProducts() {
        set(PRODUCTS_KEY, products.value)
    }

    function createProduct(product: any) {

        if (!product.nombre?.trim() || !product.precio) {
            alert("Nombre y precio son obligatorios")
            return false
        }

        if (!product.imagen) {
            alert("Debes añadir una imagen")
            return false
        }

        const newProduct = {
            ...product,
            id: crypto.randomUUID(),
            precio: Number(product.precio)
        }

        products.value.unshift(newProduct)
        saveProducts()

        return true
    }

    function deleteProduct(id: string) {
        products.value = products.value.filter(p => p.id !== id)
        saveProducts()
    }

    function loadCart() {
        const data = get(CART_KEY)
        cart.value = data || []
    }

    function saveCart() {
        set(CART_KEY, cart.value)
    }

    function addToCart(product: any) {

        const existing = cart.value.find(p => p.id === product.id)

        if (existing) {
            existing.cantidad += 1
        } else {
            cart.value.push({
                ...product,
                cantidad: 1
            })
        }

        saveCart()
    }

    function removeFromCart(id: string) {
        cart.value = cart.value.filter(p => p.id !== id)
        saveCart()
    }

    function getTotal() {
        return cart.value.reduce((total, p) => {
            return total + (p.precio * p.cantidad)
        }, 0)
    }


    loadProducts()
    loadCart()

    return {
        products,
        cart,
        loadProducts,
        createProduct,
        deleteProduct,
        addToCart,
        removeFromCart,
        getTotal
    }
}