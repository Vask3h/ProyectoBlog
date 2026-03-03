<script setup lang="ts">
import Buttons from "~/components/buttons.vue";
import inputs from "~/components/inputs.vue";
import {reactive} from "vue";

let posts = [];

let aleatorio = crypto.randomUUID();;

function createPost() {

  // posts.push({form});
  const data = localStorage.getItem("blogs");
  {
    if (data != null) {
      posts = JSON.parse(data)
    }
  }
  posts.push(form);
  localStorage.setItem("blogs", JSON.stringify(posts));
}

const form = reactive({
  titulo: "",
  fecha: "",
  cuerpo: "",
  linkImagen: "",
  id: aleatorio
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

    <div class=" w-[50%]"> <!-- Campos nuevo post -->
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
