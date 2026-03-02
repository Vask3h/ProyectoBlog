<script>

export default {
  name: "Posts",
  post: Object,
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
    imageLink: {
      type: String,
      required: false,
      default: "https://imgs.search.brave.com/pWx_fibLVReehrRhQMrIqqBxxAbPneYaaprxcABIfPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjAy/MjI2MjU0L3N0b2Nr/LXBob3RvLXRleHQt/c2lnbi1zaG93aW5n/LWV4YW1wbGUtY29u/Y2VwdHVhbC1waG90/by1pbGx1c3RyYXRp/b24tc2FtcGxlLW1v/ZGVsLWZvbGxvdw"
    },
    post: Object

  },

}


</script>
<template>
  <div class="flex flex-col   ">
    <nuxt-img
        :src="imageLink"/>
    <h2 class="font-bold text-xl "> {{ title }}</h2>
    <p>{{ date }}</p>
    <p>{{ body }}</p>

  </div>

</template>

