<script setup lang="ts">

import {reactive} from "vue"
import {usePosts} from "~/composables/usePosts"
import {useRouter} from "vue-router"

const router = useRouter()
const {createPost} = usePosts()

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

function isValidImageUrl(url: string) {
  const regex = /^(https?:\/\/.*\.(jpg|jpeg|png|gif|webp))$/i
  return regex.test(url)
}

async function publishPost() {


  if (!form.titulo.trim() || !form.cuerpo.trim()) {
    alert("El título y el contenido no pueden estar vacíos")
    return
  }

  if (!form.linkImagen && !form.imageUrl) {
    alert("Debes subir una imagen o introducir una URL")
    return
  }

  if (form.linkImagen && form.imageUrl) {
    alert("Solo puedes usar una opción: archivo o URL")
    return
  }


  if (form.imageUrl) {

    if (!isValidUrl(form.imageUrl)) {
      alert("La URL no es válida")
      return
    }

    if (!isImageUrl(form.imageUrl)) {
      alert("La URL no es una imagen válida")
      return
    }

    form.linkImagen = form.imageUrl
  }

  try {
    await createPost(form)

    alert("Post creado exitosamente")


    router.push("/")

  } catch (error) {
    console.error(error)
    alert("Error al crear el post")
  }
}

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


</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  flex flex-col items-center p-4 ">
    <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <div class="font-bold text-transparent bg-clip-text
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl
             bg-gradient-to-r from-purple-400 to-pink-600
             text-center"> <!-- Titulo -->

        Nueva entrada

      </div>

    </div>

    <div class=" w-[50%]">
      <form class="flex flex-col  w-full" id="formPost" @submit.prevent>
        <div class="w-full flex justify-center gap-10 ">

          <buttons
              buttonName="Publicar"
              @click="publishPost"
          />

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

        <Inputs
            text-label="URL de la imagen"
            text-placeholder="https://ejemplo.com/imagen.jpg"
            v-model="form.imageUrl"

        />

        <div v-if="form.linkImagen || (form.imageUrl && isValidImageUrl(form.imageUrl))" class="mt-4">
          <img
              :src="form.linkImagen || form.imageUrl"
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
