<script setup lang="ts">
import Buttons from "~/components/buttons.vue";
</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        Creador de publicaciones
      </h1>

    </div>

    <div class="w-full flex justify-center gap-10 ">

      <nuxt-link to="/">
        <buttons
            buttonName="Volver al Blog"
        />
      </nuxt-link>
      <nuxt-link to="postManager">
        <buttons
            buttonName="Gestor de Publicaciones"
        />
      </nuxt-link>
      <buttons
          onclick="console.log('Hola mundo');"
          buttonName="Test Creacion"
      />
    </div>
  </div>
</template>
