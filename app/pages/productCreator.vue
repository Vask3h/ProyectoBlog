<script setup>

import { ref, computed, onMounted } from "vue"
import { useCatalog } from "~/composables/useCatalog"
import { useAuth } from "~/composables/usePosts"

const { createProduct } = useCatalog()
const { isAdmin } = useAuth()

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

function handleSubmit() {

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

  let finalImage = ""

  if (form.value.imageFile) {
    finalImage = URL.createObjectURL(form.value.imageFile)
  } else {
    finalImage = form.value.imageUrl
  }

  const success = createProduct({
    nombre: form.value.nombre,
    precio: form.value.precio,
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

  <div class="min-h-screen bg-gray-800 text-white px-4 py-6 flex justify-center">

    <div class="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]
              bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">

      <h1 class="text-2xl sm:text-3xl font-bold text-center">
        Crear Producto
      </h1>

      <input
          v-model="form.nombre"
          type="text"
          placeholder="Nombre del producto"
          class="w-full p-3 rounded-lg text-black"
      />

      <input
          v-model="form.precio"
          type="number"
          placeholder="Precio (€)"
          class="w-full p-3 rounded-lg text-black"
      />

      <input
          v-model="form.imageUrl"
          type="text"
          placeholder="URL de la imagen"
          class="w-full p-3 rounded-lg text-black"
      />

      <input
          type="file"
          accept="image/*"
          @change="e => form.imageFile = e.target.files[0]"
          class="w-full p-2 bg-white text-black rounded-lg"
      />

      <div v-if="previewImage" class="w-full h-48 overflow-hidden rounded-lg">
        <img
            :src="previewImage"
            class="w-full h-full object-cover"
        />
      </div>

      <button
          @click="handleSubmit"
          class="w-full bg-emerald-500 hover:bg-emerald-600 transition
             p-3 rounded-lg font-bold"
      >
        Crear Producto
      </button>

    </div>

  </div>

</template>