<script setup lang="ts">
import Buttons from "~/components/buttons.vue";

function createPost() {
  console.log("createPost");
  localStorage.setItem("n1", "Texto de ejemplo");
}

</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  flex flex-col items-center p-4 ">
    <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        -- Nueva Entrada --
      </h1>

    </div>

    <div class="w-full flex justify-center gap-10 "> <!-- Botones -->

      <nuxt-link>
        <buttons
            @click="createPost"
            buttonName="Publicar"
        />
      </nuxt-link>
      <nuxt-link to="/">
        <buttons
            buttonName="Cancelar"
        />
      </nuxt-link>


    </div>
    <div class=" w-[50%] flex flex-col justify-center "> <!-- Campos nuevo post -->

      <inputs
          text-label="Titulo"
      />
      <Inputs
      text-label="Fecha"
      type-input="date"
      />

      <text-area
      text-label="Cuerpo de la publicacion"
      />

      <inputs
      text-label="Imagen de la publicacion"
      type-input="file"
      />


    </div>

  </div>
</template>
