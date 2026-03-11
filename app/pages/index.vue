<script setup lang="ts">

import {usePosts} from "~/composables/usePosts"

const {posts, loadPosts, deletePost} = usePosts()

onMounted(loadPosts)

</script>
<template>

  <div class=" min-h-screen  bg-gray-800 text-white p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="w-full flex justify-center "> <!-- Titulo -->

      <h1 class=" h-20 font-bold text-transparent bg-clip-text text-6xl  bg-gradient-to-r from-purple-400 to-pink-600  align-middle ">
        Blog Bloguistico
      </h1>

    </div>

    <div class="w-full flex justify-center gap-10 ">
      <nuxt-link to="postManager">
        <buttons
            buttonName="Gestor de Publicaciones"
        />
      </nuxt-link>

    </div>

    <div class="grid grid-cols-3 gap-10 m-10">

      <div v-for="post in posts" :key="post.id" class="border rounded p-2">
        <NuxtLink :to="`/post/${post.id}`">
          <post
              :id="post.id"
              :title="post.titulo"
              :date="post.fecha"
              :body="post.cuerpo"
              :imageLink="post.linkImagen"
              :postManager="false"
          />
        </NuxtLink>
      </div>

    </div>

  </div>
</template>
