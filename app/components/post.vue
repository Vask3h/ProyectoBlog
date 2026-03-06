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

  emits: ["delete"]

}

</script>

<template>

  <div class="flex flex-col">

    <nuxt-img :src="imageLink"/>

    <h2 class="font-bold text-xl">{{ title }}</h2>
    <p>{{ date }}</p>
    <p>{{ body }}</p>

    <buttons
        v-if="postManager"
        buttonName="Eliminar"
        @click="$emit('delete', id)"
    />

  </div>

</template>
