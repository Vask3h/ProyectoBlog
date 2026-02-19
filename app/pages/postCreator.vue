<script setup lang="ts">
import Buttons from "~/components/buttons.vue";
import inputs from "~/components/inputs.vue";
import {reactive} from "vue";

function createPost() {
  localStorage.setItem("post", JSON.stringify(form))
  console.log("Post guardado:", form)
}

const form = reactive({
  titulo: "",
  fecha: "",
  cuerpo: ""
})

</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  flex flex-col items-center p-4 ">
    <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        -- Nueva Entrada --
      </h1>

    </div>

    <div class=" w-[50%]   "> <!-- Campos nuevo post -->
      <form class="flex flex-col  w-full" id="formPost">
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
        <inputs
            text-label="Titulo"
            v-model="form.titulo"
        />
        <Inputs
            text-label="Fecha"
            type-input="date"
            v-model="form.fecha"
        />

        <text-area
            text-label="Cuerpo de la publicacion"
            v-model="form.cuerpo"
        />
        <!--
        <inputs
            text-label="Imagen de la publicacion"
            type-input="file
        />
        -->
      </form>
    </div>

  </div>
</template>
