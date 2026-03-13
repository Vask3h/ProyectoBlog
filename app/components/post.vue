<script>

export default {

  props: {
    title: String,
    date: String,
    body: String,
    imageLink: String,
    postManager: Boolean,
    id: String
  },

  emits: ["delete"],

  methods: {

    formatSpanishDate(dateString) {

      const date = new Date(dateString)

      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })

    }

  }

}

</script>

<template>

  <div class="bg-gray-900 rounded-xl overflow-hidden shadow-lg
            flex flex-col
            h-[380px] sm:h-[400px] lg:h-[420px]
            hover:scale-105 transition duration-300">

    <div class="w-full h-40 sm:h-44 lg:h-48 overflow-hidden">
      <nuxt-img class="w-full h-full object-cover" :src="imageLink"/>
    </div>
    <div class="p-1" >
      <h2 class="font-bold text-xl line-clamp-2">{{ title }}</h2>
      <p class="text-xs text-gray-400 uppercase tracking-wide my-1" >{{ formatSpanishDate(date) }}</p>
      <p class="line-clamp-4">{{ body }}</p>
    </div>

    <div class="flex gap-5 p-1">
      <buttons
          v-if="postManager"
          buttonName="Eliminar"
          @click="$emit('delete', id)"
      />

      <NuxtLink
          v-if="postManager"
          :to="`/postEditor?id=${id}`"
      >
        <Buttons buttonName="Editar"/>
      </NuxtLink>
    </div>


  </div>

</template>
