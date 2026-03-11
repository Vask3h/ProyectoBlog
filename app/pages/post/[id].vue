<script setup lang="ts">

import { useRoute } from "vue-router"
import { computed } from "vue"
import { usePosts } from "~/composables/usePosts"

const route = useRoute()

const { posts, loadPosts } = usePosts()

loadPosts()

const post = computed(() => {
  return posts.value.find(p => p.id === route.params.id)
})

</script>

<template>

  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">

    <div class="max-w-4xl mx-auto mb-6">
      <NuxtLink
          to="/"
          class="text-purple-400 hover:text-purple-300 transition"
      >
        <p>
          ← Volver al blog
        </p>
      </NuxtLink>
    </div>

    <div
        v-if="post"
        class="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >

      <div class="w-full h-[400px] overflow-hidden">
        <nuxt-img
            :src="post.linkImagen"
            class="w-full h-full object-cover"
        />
      </div>

      <div class="p-10 flex flex-col gap-6">

        <h1 class="text-5xl font-bold leading-tight">
          {{ post.titulo }}
        </h1>

        <p class="text-gray-400 text-sm">
          Publicado el {{ post.fecha }}
        </p>

        <div class="w-full h-[1px] bg-gray-700"></div>

        <p class="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
          {{ post.cuerpo }}
        </p>

      </div>

    </div>

  </div>

</template>