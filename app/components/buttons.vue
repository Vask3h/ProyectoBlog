<template>
  <div class="flex gap-4">
    <button
        class=" hover:bg-emerald-500 flex justify-center items-center border border-2 border-emerald-200 bg-emerald-200 w-auto h-12 rounded-full border-2 border-emerald-500 text-black p-3 text-lg font-bold ">
      {{ buttonName }}
    </button>
  </div>

</template>
<script>
export default {
  name: 'buttons',
  props: {
    buttonName: {
      type: String,
      default: "",
      required: false
    }
  },
}
</script>