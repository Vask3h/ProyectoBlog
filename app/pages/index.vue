<script setup lang="ts">

import {usePosts} from "~/composables/usePosts"
import Navbar from "~/components/Navbar.vue";
import {checkLogin} from "~/composables/usePosts";

const {posts, loadPosts, deletePost} = usePosts()
const {loguedIn} = checkLogin()


onMounted(loadPosts)

onMounted(loguedIn)

const user = ref(null)
const isAdmin = ref(false)

onMounted(() => {
  const stored = localStorage.getItem("currentUser")

  if (stored) {
    user.value = JSON.parse(stored)
    isAdmin.value = user.value.role === "admin"
  }
})

</script>
<template>
  <Navbar/>
  <div class=" min-h-screen  bg-gray-800 text-white p-4 "> <!-- Contenedor principal pantalla completa -->
    <h1 class="font-bold text-transparent bg-clip-text
           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
           bg-gradient-to-r from-purple-400 to-pink-600
           text-center ">
      Blog Bloquistico
    </h1>

    <div class="w-full flex justify-center gap-10 p-2 ">

      <nuxt-link to="postManager">
        <buttons
            v-if="isAdmin"
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
