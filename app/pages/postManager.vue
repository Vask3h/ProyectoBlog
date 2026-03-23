<script setup lang="ts">

import { usePosts } from "~/composables/usePosts"
import Navbar from "~/components/Navbar.vue";

const { posts, loadPosts, deletePost } = usePosts()

onMounted(loadPosts)

const user = ref(null)
const isAdmin = ref(false)

onMounted(() => {

  const stored = localStorage.getItem("currentUser")

  if (!stored) {
    router.push("/login")
    return
  }

  const user = JSON.parse(stored)

  if (user.role !== "admin") {
    router.push("/")
  }

})

</script>
<template>
  <Navbar/>
  <div class=" min-h-screen bg-gray-800 text-white  p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="font-bold text-transparent bg-clip-text
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl
             bg-gradient-to-r from-purple-400 to-pink-600
             text-center"> <!-- Titulo -->

      Blog Bloguistico

    </div>

    <div class="w-full flex justify-center gap-5 p-2 ">
      <nuxt-link to="/">
        <buttons
            buttonName="Volver al Blog"
        />
      </nuxt-link>
      <nuxt-link to="postCreator">
        <buttons
            buttonName="Nueva Publicacion"
        />
      </nuxt-link>

    </div>

    <div class="flex flex-wrap justify-center items-stretch gap-6 p-6">

    <div v-for="post in posts" :key="post.id" class=" rounded p-2 " >
        <post
            :id = "post.id"
            :title="post.titulo"
            :date="post.fecha"
            :body="post.cuerpo"
            :imageLink="post.linkImagen"
            :post-manager = true
            @delete="deletePost"
        />

      </div>
    </div>

  </div>
</template>