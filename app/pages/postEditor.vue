<script setup lang="ts">

import {reactive, onMounted} from "vue"
import {useRoute, useRouter} from "vue-router"
import {usePosts} from "~/composables/usePosts"

import Buttons from "~/components/buttons.vue"
import Inputs from "~/components/inputs.vue"

const route = useRoute()
const router = useRouter()

const {posts, loadPosts, updatePost} = usePosts()

const form = reactive({
  id: "",
  titulo: "",
  fecha: "",
  cuerpo: "",
  linkImagen: "",
  imageUrl: ""
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

    if (post.linkImagen?.startsWith("data:image")) {
      form.linkImagen = post.linkImagen
      form.imageUrl = ""
    } else {
      form.imageUrl = post.linkImagen
      form.linkImagen = ""
    }
  }

})

function handleImage(event: any) {

  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onload = (e: any) => {
    form.linkImagen = e.target.result
    form.imageUrl = ""
  }

  reader.readAsDataURL(file)
}

async function saveEdit() {

  if (!form.titulo.trim() || !form.cuerpo.trim()) {
    alert("El título y el contenido no pueden estar vacíos")
    return
  }

  const updatedPost = {
    ...form,
    linkImagen: form.imageUrl || form.linkImagen
  }

  await updatePost(updatedPost)

  router.push("/postManager")
}

</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white flex flex-col items-center p-4">

    <div class="font-bold text-transparent bg-clip-text
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl
             bg-gradient-to-r from-purple-400 to-pink-600
             text-center"> <!-- Titulo -->

      Blog Bloguistico

    </div>

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

      <input
          type="file"
          accept="image/*"
          @change="handleImage"
          class="border-4 border-emerald-200 bg-emerald-200 rounded-lg text-black mt-7"
      />
      <Inputs
          text-label="URL de la imagen"
          text-placeholder="https://ejemplo.com/imagen.jpg"
          v-model="form.imageUrl"
      />
      <div v-if="form.linkImagen" class="mt-4">
        <img
            :src="form.imageUrl || form.linkImagen"
            class="w-full h-60 object-cover rounded-lg"
        />
      </div>

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