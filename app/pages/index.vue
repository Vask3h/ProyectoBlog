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

    <div class="grid grid-cols-3 gap-10  align-items-center m-10"> <!-- Publicaciones -->
      <post
          title="Titulo1"
          date="2018-04-01"
          body="texto de ejemplo..."
          imageLink ="https://imgs.search.brave.com/pWx_fibLVReehrRhQMrIqqBxxAbPneYaaprxcABIfPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjAy/MjI2MjU0L3N0b2Nr/LXBob3RvLXRleHQt/c2lnbi1zaG93aW5n/LWV4YW1wbGUtY29u/Y2VwdHVhbC1waG90/by1pbGx1c3RyYXRp/b24tc2FtcGxlLW1v/ZGVsLWZvbGxvdw"
      />





    </div>

  </div>
</template>
