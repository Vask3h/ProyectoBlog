<script setup>

import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const user = ref(null)

onMounted(() => {
  const storedUser = localStorage.getItem("currentUser")
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
})

function logout() {
  localStorage.removeItem("currentUser")
  window.location.href = "/login"
}

</script>

<template>

  <div class="w-full bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow-md">

    <h1 class="font-bold text-lg sm:text-xl">
      Blog
    </h1>

    <div v-if="user" class="flex items-center gap-3">

    <span class="text-sm sm:text-base text-gray-300">
      👤 {{ user.username }}
    </span>

      <button
          @click="logout"
          class="bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-lg text-sm font-bold"
      >
        Logout
      </button>

    </div>

  </div>

</template>