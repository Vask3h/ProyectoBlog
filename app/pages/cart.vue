<script setup>
import { useCatalog } from "~/composables/useCatalog"

const { cart, removeFromCart, getTotal } = useCatalog()
</script>

<template>
<navbar/>
  <div class="min-h-screen bg-gray-800 text-white px-4 py-6">

    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
      Carrito
    </h1>

    <div v-if="cart.length === 0" class="text-center text-gray-400">
      El carrito está vacío
    </div>

    <div v-else class="max-w-5xl mx-auto">

      <div class="hidden md:grid grid-cols-5 gap-4 mb-3 px-4 text-gray-400">
        <span>Producto</span>
        <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <span>Total</span>
      </div>

      <div
          v-for="item in cart"
          :key="item.id"
          class="bg-gray-900 rounded-xl p-4 mb-4 shadow-lg
             flex flex-col md:grid md:grid-cols-5 md:items-center gap-4"
      >

        <div class="w-full md:w-20 h-40 md:h-20 overflow-hidden rounded-lg">
          <img
              :src="item.imagen"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="text-center md:text-left font-bold break-words">
          {{ item.nombre }}
        </div>

        <div class="text-center">
          {{ item.precio }} €
        </div>

        <div class="text-center">
          x{{ item.cantidad }}
        </div>

        <div class="flex justify-center md:justify-between items-center gap-2">

        <span class="font-bold">
          {{ item.precio * item.cantidad }} €
        </span>

          <button
              @click="removeFromCart(item.id)"
              class="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          >
            ❌
          </button>

        </div>

      </div>

      <div class="text-right mt-6 text-xl font-bold">
        Total: {{ getTotal() }} €
      </div>

    </div>

  </div>

</template>