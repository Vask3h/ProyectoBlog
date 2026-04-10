<script setup>
import { ref, onMounted } from "vue"
import { useAuth } from "~/composables/usePosts"

const { getCurrentUser, logout } = useAuth()

const user = ref(null)

onMounted(() => {
  user.value = getCurrentUser()
})

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

      <nuxt-link to="/cart" class="hover:text-purple-400 font-bold">
        Carrito
      </nuxt-link>
    </div>

    <div class="flex items-center gap-4">

      <span v-if="user">
        👤 {{ user.username }}
      </span>

      <button
          v-if="user"
          @click="handleLogout"
          class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </div>

  </nav>
</template>