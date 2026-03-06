<script setup lang="ts">

import { reactive } from "vue"
import { usePosts } from "~/composables/usePosts"

const { createPost } = usePosts()

const form = reactive({
  titulo: "",
  fecha: "",
  cuerpo: "",
  linkImagen: ""
})

function publishPost() {
  createPost(form)
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

    <div class=" w-[50%]"> <!-- Campos nuevo post -->
      <form class="flex flex-col  w-full" id="formPost">
        <div class="w-full flex justify-center gap-10 "> <!-- Botones -->
          <nuxt-link>
            <buttons
                buttonName="Publicar"
                @click="publishPost"
            />
          </nuxt-link>
          <nuxt-link to="/">
            <buttons
                buttonName="Cancelar"
            />
          </nuxt-link>
        </div>
        <inputs
            text-label="Titulo"
            v-model="form.titulo"
        />
        <Inputs
            text-label="Fecha"
            type-input="date"
            v-model="form.fecha"
        />

        <Inputs
            text-label="Imagen"
            v-model="form.linkImagen"
        />

        <text-area
            text-label="Cuerpo de la publicacion"
            v-model="form.cuerpo"
        />
      </form>
    </div>

  </div>
</template>
