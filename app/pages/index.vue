<script setup lang="ts">
import Buttons from "~/components/buttons.vue";
</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        Blog Bloguistico
      </h1>

    </div>

    <div class="w-full flex justify-center gap-10 ">
      <nuxt-link to="postManager">
        <buttons
            buttonName="Gestor de Publicaciones"
        />
      </nuxt-link>
    </div>

    <div class="grid grid-cols-3 gap-4 bg-red-800 align-items-center m-10"> <!-- Publicaciones -->
      <post/>
      <post/>
      <post/>
      <post/>


    </div>

  </div>
</template>
