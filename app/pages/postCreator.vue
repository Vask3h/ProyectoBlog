<script setup lang="ts">

import { reactive } from "vue"
import { usePosts } from "~/composables/usePosts"

const { createPost } = usePosts()

function getTodayInputDate() {

  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const form = reactive({
  titulo: "",
  fecha: getTodayInputDate(),
  cuerpo: "",
  linkImagen: ""
})

function publishPost() {
  createPost(form)
}

function handleImage(event) {

  const file = event.target.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.onload = (e) => {
    form.linkImagen = e.target.result
  }

  reader.readAsDataURL(file)

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

    <div class=" w-[50%]">
      <form class="flex flex-col  w-full" id="formPost">
        <div class="w-full flex justify-center gap-10 ">
          <nuxt-link to="/">
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

        <input
            type="file"
            accept="image/*"
            @change="handleImage"
            class="border-4 border-emerald-200 bg-emerald-200 rounded-lg text-black mt-7"
        />
        <div v-if="form.linkImagen" class="mt-4">
          <img
              :src="form.linkImagen"
              class="w-full h-60 object-cover rounded-lg"
          />
        </div>

        <text-area
            text-label="Cuerpo de la publicacion"
            v-model="form.cuerpo"
        />
      </form>
    </div>

  </div>
</template>
