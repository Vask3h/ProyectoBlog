<script setup lang="ts">

/* En Caso de liarla con el local storage
onMounted(() => {
  if (process.client) {
    localStorage.clear();
  }
});
*/

import { onMounted, ref } from "vue"
import { usePosts, useAuth } from "~/composables/usePosts"
import Navbar from "~/components/Navbar.vue";

const router = useRouter()
const { posts, loadPosts, deletePost } = usePosts()


const { isAdmin, getCurrentUser, isLoggedIn } = useAuth()
const user = ref(null)


onMounted(() => {

  if (!isLoggedIn()) {

    router.push("/login")
    return
  }
  const stored = getCurrentUser()
  if (stored) {
    user.value = stored
  }

  loadPosts()
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