<script setup lang="ts">

import {usePosts} from "~/composables/usePosts"

const {posts, loadPosts, deletePost} = usePosts()

onMounted(loadPosts)

</script>
<template>

  <div class=" min-h-screen  bg-gray-800 text-white p-4 "> <!-- Contenedor principal pantalla completa -->
    <div class="font-bold text-transparent bg-clip-text
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl
             bg-gradient-to-r from-purple-400 to-pink-600
             text-center"> <!-- Titulo -->

        Blog Bloguistico

    </div>

    <div class="w-full flex justify-center gap-10 p-2 ">
      <nuxt-link to="postManager">
        <buttons
            buttonName="Gestor de Publicaciones"
        />
      </nuxt-link>

    </div>

    <div class="flex flex-wrap justify-center items-stretch gap-6 p-6">

      <div v-for="post in posts" :key="post.id" class=" rounded p-2">
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
