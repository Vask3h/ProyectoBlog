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

    <div v-else class="max-w-4xl mx-auto flex flex-col gap-4">

      <div
          v-for="item in cart"
          :key="item.id"
          class="bg-gray-900 rounded-xl p-4 shadow-lg
             flex flex-col sm:flex-row items-center gap-4"
      >

        <div class="w-full sm:w-28 h-40 sm:h-28 overflow-hidden rounded-lg flex-shrink-0">
          <img
              :src="item.imagen"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="flex-1 text-center sm:text-left">

          <h2 class="font-bold text-lg break-words">
            {{ item.nombre }}
          </h2>

          <p class="text-gray-300">
            {{ item.precio }} € x {{ item.cantidad }}
          </p>

        </div>

        <div class="font-bold text-lg">
          {{ item.precio * item.cantidad }} €
        </div>

        <button
            @click="removeFromCart(item.id)"
            class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          ❌
        </button>

      </div>

      <div class="text-right mt-4 text-xl font-bold">
        Total: {{ getTotal() }} €
      </div>

    </div>

  </div>

</template>