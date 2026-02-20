<script>

export default {
  name: "Posts",
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    imageLink:{
      type: String,
      required: false
    }
  },

}


</script>
<template>
  <div class="flex flex-col   border rounded p-2">
    <nuxt-img
        :src="imageLink"/>
    <h2 class="font-bold text-xl "> {{ title }}</h2>
    <p>{{ date }}</p>
    <p>{{ body }}</p>

  </div>

</template>

