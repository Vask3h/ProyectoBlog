<script setup>

import {ref, computed, onMounted} from "vue"
import {useCatalog} from "~/composables/useCatalog"
import {useAuth} from "~/composables/usePosts"

const {createProduct} = useCatalog()
const {isAdmin} = useAuth()

const form = ref({
  nombre: "",
  precio: "",
  imageUrl: "",
  imageFile: null
})

onMounted(() => {
  if (!isAdmin()) {
    navigateTo("/")
  }
})

function isImageUrl(url) {
  const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i
  return pattern.test(url)
}

const previewImage = computed(() => {

  if (form.value.imageFile) {
    return URL.createObjectURL(form.value.imageFile)
  }

  if (form.value.imageUrl && isImageUrl(form.value.imageUrl)) {
    return form.value.imageUrl
  }

  return null
})

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

async function handleSubmit() {

  if (!form.value.nombre.trim()) {
    alert("El nombre no puede estar vacío")
    return
  }

  if (!form.value.precio || form.value.precio <= 0) {
    alert("El precio debe ser válido")
    return
  }

  if (!form.value.imageFile && !form.value.imageUrl) {
    alert("Debes añadir una imagen")
    return
  }

  if (form.value.imageFile && form.value.imageUrl) {
    alert("Solo puedes usar archivo o URL, no ambos")
    return
  }

  if (form.value.imageUrl && !isImageUrl(form.value.imageUrl)) {
    alert("La URL de la imagen no es válida")
    return
  }

  if (form.value.imageFile && form.value.imageFile.size > 2 * 1024 * 1024) {
    alert("La imagen es demasiado grande (máx 2MB)")
    return
  }

  let finalImage = ""

  if (form.value.imageFile) {
    finalImage = await fileToBase64(form.value.imageFile)
  } else {
    finalImage = form.value.imageUrl
  }

  const success = createProduct({
    nombre: form.value.nombre,
    precio: Number(form.value.precio),
    imagen: finalImage
  })

  if (!success) return

  alert("Producto creado correctamente")

  form.value = {
    nombre: "",
    precio: "",
    imageUrl: "",
    imageFile: null
  }
}

</script>

<template>
  <navbar/>
  <div class="min-h-screen bg-gray-800 text-white flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6">

    <div class="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]
              bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-2">

      <h1 class="text-2xl sm:text-3xl font-bold text-center">
        Creador Producto
      </h1>

      <inputs
          v-model="form.nombre"
          text-label="Nombre del producto"
      />

      <inputs
          v-model="form.precio"
          text-label="Precio (€)"
      />

      <inputs
          v-model="form.imageUrl"
          type="text"
          text-label="URL de la imagen"
      />

      <input
          type="file"
          accept="image/*"
          @change="e => form.imageFile = e.target.files[0]"
          class="border-4 border-emerald-200 bg-emerald-200 rounded-lg text-black mt-7"
      />

      <div v-if="previewImage" class="w-full h-48 overflow-hidden rounded-lg">
        <img
            :src="previewImage"
            class="w-full h-full object-cover"
        />
      </div>

      <div class="w-full flex  gap-2">
        <buttons
            @click="handleSubmit"
            buttonName="Crear Producto"

        >

        </buttons>
        <nuxt-link to="catalogo">
          <buttons
              buttonName="Cancelar"
          />
        </nuxt-link>
      </div>


    </div>

  </div>

</template>