<script setup>

import { onMounted } from "vue"
import { useCatalog } from "~/composables/useCatalog"
import { useAuth } from "~/composables/usePosts"

const { products, loadProducts, addToCart, deleteProduct } = useCatalog()
const { isAdmin } = useAuth()

onMounted(() => {
  loadProducts()
})

</script>

<template>
<navbar/>
  <div class="min-h-screen bg-gray-800 text-white px-4 py-6">

    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
      Catálogo
    </h1>

    <div class="flex flex-wrap justify-center gap-6">

      <div
          v-for="p in products"
          :key="p.id"
          class="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]
             bg-gray-900 rounded-xl overflow-hidden shadow-lg
             flex flex-col"
      >

        <div class="w-full h-48 overflow-hidden">
          <img
              :src="p.imagen"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-4 flex flex-col gap-2 flex-1">

          <h2 class="text-lg font-bold">
            {{ p.nombre }}
          </h2>

          <p class="text-emerald-400 font-bold">
            {{ p.precio }} €
          </p>

          <div class="mt-auto flex flex-col gap-2">

            <button
                @click="addToCart(p)"
                class="bg-blue-500 hover:bg-blue-600 p-2 rounded font-bold"
            >
              Añadir al carrito
            </button>

            <button
                v-if="isAdmin()"
                @click="deleteProduct(p.id)"
                class="bg-red-500 hover:bg-red-600 p-2 rounded font-bold"
            >
              Eliminar
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>