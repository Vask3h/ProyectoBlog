<script setup lang="ts">

import { usePosts } from "~/composables/usePosts"

const { posts, loadPosts, deletePost } = usePosts()

onMounted(loadPosts)

</script>
<template>

  <div class="w-screen h-screen bg-gray-800 text-white  p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        Gestor de publicaciones
      </h1>

    </div>

    <div class="w-full flex justify-center gap-5 ">
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

    <div class="grid grid-cols-3 gap-10  align-items-center m-10 "> <!-- Publicaciones -->
      <div v-for="post in posts" :key="post.id" class="border rounded p-2 " >
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