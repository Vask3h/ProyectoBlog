<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-800 text-white px-4">

    <div class="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%]
              bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg">

      <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
        Iniciar Sesión
      </h1>

      <input
          v-model="form.username"
          type="text"
          placeholder="Usuario"
          class="w-full p-3 mb-4 rounded-lg text-black outline-none"
      />

      <input
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          class="w-full p-3 mb-6 rounded-lg text-black outline-none"
      />

      <button
          class="w-full bg-emerald-500 hover:bg-emerald-600 transition
             p-3 rounded-lg font-bold"
      >
        Entrar
      </button>

      <p class="text-center text-sm mt-4 text-gray-400">
        ¿No tienes cuenta?
        <NuxtLink to="/register" class="text-emerald-400 hover:underline">
          Regístrate
        </NuxtLink>
      </p>

    </div>

  </div>

</template>