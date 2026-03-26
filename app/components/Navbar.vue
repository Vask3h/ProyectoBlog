<script setup>
import {useAuth} from "~/composables/usePosts"

const {currentUser, isAdmin, logout} = useAuth()

function handleLogout() {
  logout()
  location.reload()
}
</script>

<template>
  <nav class="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">


    <div class="flex gap-4 items-center">

      <nuxt-link to="/" class="hover:text-purple-400 font-bold">
        Blog
      </nuxt-link>

      <nuxt-link to="/catalogo" class="hover:text-purple-400 font-bold">
        Tienda
      </nuxt-link>



    </div>
    <div class="flex items-center gap-4">

      <span v-if="currentUser">
        👤 {{ currentUser.username }}
      </span>

      <button
          v-if="currentUser"
          @click="handleLogout"
          class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </div>

  </nav>
</template>