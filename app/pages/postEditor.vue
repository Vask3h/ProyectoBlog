<script setup lang="ts">

import { reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { usePosts } from "~/composables/usePosts"

import Buttons from "~/components/buttons.vue"
import Inputs from "~/components/inputs.vue"

const route = useRoute()
const router = useRouter()

const { posts, loadPosts, updatePost } = usePosts()

const form = reactive({
  id: "",
  titulo: "",
  fecha: "",
  cuerpo: "",
  linkImagen: ""
})

onMounted(() => {

  loadPosts()

  const id = route.query.id

  const post = posts.value.find(p => p.id === id)

  if (post) {
    form.id = post.id
    form.titulo = post.titulo
    form.fecha = post.fecha
    form.cuerpo = post.cuerpo
    form.linkImagen = post.linkImagen
  }

})

function saveEdit() {

  updatePost({ ...form })

  router.push("/postManager")

}

</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white flex flex-col items-center p-4">

    <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
      -- Editar publicacion --
    </h1>

    <div class="w-[50%] flex flex-col gap-1">

      <Inputs
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
          text-label="Contenido"
          v-model="form.cuerpo"
      />

      <div class="flex gap-5">

        <Buttons
            buttonName="Guardar"
            @click="saveEdit"
        />

        <NuxtLink to="/postManager">
          <Buttons buttonName="Cancelar"/>
        </NuxtLink>

      </div>

    </div>

  </div>

</template>