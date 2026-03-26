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

    <h1 class="font-bold text-transparent bg-clip-text
           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
           bg-gradient-to-r from-purple-400 to-pink-600
           text-center ">
      Catalogo
    </h1>
    <div class="w-full flex justify-center gap-10 p-2 ">

      <nuxt-link to="productCreator">
        <buttons
            v-if="isAdmin"
            buttonName="Crear productos"
        />
      </nuxt-link>

    </div>

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

          <div class="mt-auto flex  gap-2">

            <buttons
                buttonName="Añadir al carro"
                @click="addToCart(p)"
            >

            </buttons>

            <buttons
                v-if="isAdmin()"
                @click="deleteProduct(p.id)"
                buttonName="Eliminar Prod"
            >

            </buttons>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>