<script setup>

import {ref} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()

const form = ref({
  username: "",
  password: "",
  adminKey: ""
})

const ADMIN_KEY = "12345" // clave secreta

function register() {

  if (!form.value.username || !form.value.password) {
    alert("Completa todos los campos")
    return
  }

  const users = JSON.parse(localStorage.getItem("users")) || []

  const exists = users.find(u => u.username === form.value.username)

  if (exists) {
    alert("El usuario ya existe")
    return
  }

  const role = form.value.adminKey === ADMIN_KEY ? "admin" : "user"

  const newUser = {
    username: form.value.username,
    password: form.value.password,
    role
  }

  users.push(newUser)

  localStorage.setItem("users", JSON.stringify(users))
  localStorage.setItem("currentUser", JSON.stringify(newUser))

  router.push("/")

}

</script>
<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-800 text-white px-4">

    <div class="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%]
              bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg">

      <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
        Registro
      </h1>

      <input
          v-model="form.username"
          type="text"
          placeholder="Nombre de usuario"
          class="w-full p-3 mb-4 rounded-lg text-black outline-none"
      />

      <input
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          class="w-full p-3 mb-4 rounded-lg text-black outline-none"
      />

      <input
          v-model="form.adminKey"
          type="password"
          placeholder="Clave admin (opcional)"
          class="w-full p-3 mb-6 rounded-lg text-black outline-none"
      />

      <button
          @click="register"
          class="w-full bg-emerald-500 hover:bg-emerald-600 transition
             p-3 rounded-lg font-bold"
      >
        Registrarse
      </button>

      <p class="text-center text-sm mt-4 text-gray-400">
        ¿Ya tienes cuenta?
        <NuxtLink to="/login" class="text-emerald-400 hover:underline">
          Inicia sesión
        </NuxtLink>
      </p>

    </div>

  </div>

</template>