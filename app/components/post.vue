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

  <div class="flex flex-col truncate">

    <nuxt-img :src="imageLink"/>

    <h2 class="font-bold text-xl">{{ title }}</h2>
    <p>{{ date }}</p>
    <p class="truncate" >{{ body }}</p>
<div class="flex gap-5" >
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
