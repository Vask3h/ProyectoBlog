<script setup lang="ts">
import { reactive, ref, onMounted } from "vue"
import { usePosts } from "~/composables/usePosts"
import { useRouter } from "vue-router"
import Navbar from "~/components/Navbar.vue"

const router = useRouter()
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
  linkImagen: "",
  imageUrl: ""
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
    if (!isValidImageUrl(form.imageUrl)) {
      alert("La URL no es válida o no es una imagen válida")
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

  form.imageUrl = ""

  const reader = new FileReader()
  reader.onload = (e: any) => {
    form.linkImagen = e.target.result
  }
  reader.readAsDataURL(file)
}

function handleUrlInput() {
  if (form.imageUrl) {
    form.linkImagen = ""
  }
}

const user = ref(null)
const isAdmin = ref(false)

onMounted(() => {
  const stored = localStorage.getItem("currentUser")

  if (stored) {
    try {
      user.value = JSON.parse(stored)
      isAdmin.value = user.value.role === "admin"

      if (!isAdmin.value) {
        router.push("/")
      }
    } catch (error) {
      console.error("Error parsing user data", error)
      router.push("/login")
    }
  } else {
    router.push("/login")
  }
})
</script>
<template>
  <Navbar/>
  <div class= "min-h-screen bg-gray-800 text-white flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6">
    <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <div class="font-bold text-transparent bg-clip-text
             text-3xl sm:text-5xl md:text-5xl lg:text-6xl
             bg-gradient-to-r from-purple-400 to-pink-600
             text-center"> <!-- Titulo -->

        Nueva entrada

      </div>

    </div>

    <div class="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]
              bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-2">
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

        <div v-if="form.linkImagen" class="mt-4">
          <img
              :src="form.imageUrl || form.linkImagen"
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
